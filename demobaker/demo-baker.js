async function launchV86(screenContainer, config) {
    const validConfig = {
        editLink: null,
        name: '',
        ...config
    }

    const { 
        dosImgUrl,
        biosUrl,
        vgaBiosUrl,
        editLink,
        type,
        name,
        content
    } = validConfig;
    const contentBytes = Uint8Array.from(atob(content), c => c.charCodeAt(0));

    const v86Config = {
        screen_container: screenContainer,
        bios: {
            url: biosUrl,
        },
        vga_bios: {
            url: vgaBiosUrl,
        },
        fda: {},
        autostart: true
    };

    switch (type) {
        case 'com':
            const dosResponse = await fetch(dosImgUrl);
            const dosImg = new Uint8Array(await dosResponse.arrayBuffer());
            dosImg.set(contentBytes, 0x26000);
            v86Config.fda.buffer = dosImg.buffer;
            break;

        case 'mbr':
            const fdaImg = new Uint8Array(1474560);
            fdaImg.set(contentBytes, 0);
            v86Config.fda.buffer = fdaImg.buffer;
            break;

        default:
            throw new Error('Invalid type');
    }

    if (name?.trim()?.length > 0) 
        document.querySelector('header > h1').textContent = name.trim();

    if (editLink) {
        const withoutPadding = content.split('=')[0];
        const url = `build.html?type=${type}&content=${encodeURIComponent(withoutPadding)}&name=${name}`
        editLink.innerHTML = `<a href="${url}">Back to editor</a>`;
    }

    return new V86Starter(v86Config);
}

export async function start() {
    console.log('running!');
    const urlParams = new URLSearchParams(window.location.search);
    const screenContainer = document.getElementById('screen_container');
    const valid = urlParams.has('type') && urlParams.has('content');
    if (!valid)
        location.href = "build.html";

    const type = urlParams.get('type');
    const content = urlParams.get('content');
    const editLink = urlParams.has('preview')
        ? document.getElementById('editLink')
        : null;


    const config = {
        type, 
        content, 
        editLink,
        dosImgUrl: 'image/freedos.img', 
        biosUrl: 'bios/seabios.bin',
        vgaBiosUrl: 'bios/vgabios.bin'
    }
    if (urlParams.has('name'))
        config.name = urlParams.get('name');

    try {
        await launchV86(screenContainer, config);
    } catch (e) {
        screenContainer.textContent = e.message;
    }
}

