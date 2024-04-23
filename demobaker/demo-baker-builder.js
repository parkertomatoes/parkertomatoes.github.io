export function parseDemoBakerState(queryString) {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type') ?? 'mbr';
    const name = urlParams.get('name') ?? 'name';
    const content = urlParams.get('content') ?? null;
    return { type, name, content };
}

/**
 * Converts file content to base64 and checks the size
 * @param {File} file 
 */
async function getContent(file) {
    if (file.size <= 1024) {
        const contentBytes = new Uint8Array(await file.arrayBuffer());
        const contentStr = String.fromCharCode(...contentBytes);
        const contentB64 = btoa(contentStr);
        return { 
            result: 'ok',
            content: encodeURIComponent(contentB64)
        };
    } else {
        return {
            result: 'tooLarge',
            content: null
        };
    }
}

export async function demoBaker(demoForm, initialState) {
    // Initialize state
    const state = {
        name: '',
        type: 'mbr',
        content: null,
        error: null
    }

    // Find element references

    const elements = {
        nameInput: demoForm.querySelector("input[name='demoName']"),
        typeMbr: demoForm.querySelector("input[name='demoType'][value='mbr']"),
        typeCom: demoForm.querySelector("input[name='demoType'][value='com']"),
        contentZone: demoForm.querySelector(".demo-drop-zone"),
        contentInput: demoForm.querySelector("input[name='demoContent']"),
        contentMessage: demoForm.querySelector(".demo-drop-zone p.status"),
        errorMessage: demoForm.querySelector(".demoError"),
        generateButton: demoForm.querySelector("button.demoGenerate"),
        previewButton: demoForm.querySelector("button.demoPreview"),
        outputLink: demoForm.querySelector(".demoOutput")
    }

    // State management

    function updateName(name) {
        state.name = name;
        elements.nameInput.name = name;
    }

    function updateType(type) {
        if (type === 'com') {
            state.type = 'com';
            elements.typeCom.checked = true;
        } else {
            state.type = 'mbr';
            elements.typeMbr.checked = true;
        }
    }

    async function updateContentFromFile(file) {
        elements.errorMessage.textContent = '';
        const { result, content } = await getContent(file);
        if (result === 'ok') {
            state.content = content;
            elements.contentMessage.textContent = `${file.size} bytes selected`;
            elements.generateButton.disabled = false;
            elements.previewButton.disabled = false;
        } else if (result === 'tooLarge') {
            elements.errorMessage.textContent = `Expected binary that is 1k or smaller`
        }
    }

    function updateContentFromString(content) {
        const size = atob(content).length;
        state.content = encodeURIComponent(content);
        elements.contentMessage.textContent = `${size} bytes selected`;
        elements.generateButton.disabled = false;
        elements.previewButton.disabled = false;
    }

    // Initialize state

    if (initialState?.type)
        updateType(initialState.type);

    if (initialState?.content)
        updateContentFromString(initialState.content);

    // Event handlers

    function generateUrl() {
        const rawUrl = location.href
            .split("?")[0]  
            .split("#")[0]
            .split('/build.html')[0];
        return `${rawUrl}?type=${state.type}&content=${state.content}&name=${encodeURIComponent(state.name)}`;
    }

    function generateLink(preview) {
        const url = generateUrl();
        elements.outputLink.innerHTML = `<a href="${url}">${url}</a>`;
    }

    function goToPreview() {
        location.href = `${generateUrl()}&preview=y`;
    }

    // Attach handlers

    elements.nameInput.addEventListener('change', () => {
        state.name = elements.nameInput.value;
    });

    elements.typeMbr.addEventListener('change', () => {
        state.type = 'mbr';
    });

    elements.typeCom.addEventListener('change', () => {
        state.type = 'com';
    });

    elements.contentZone.addEventListener('click', () => {
        elements.contentInput.click();
    });

    elements.contentZone.addEventListener('dragover', ev => {
        ev.preventDefault();
    });

    elements.contentZone.addEventListener('drop', ev => {
        ev.preventDefault();

        if (ev.dataTransfer.files.length > 0)
            updateContentFromFile(ev.dataTransfer.files[0]);
    });

    elements.contentInput.addEventListener('change', () => {
        if (elements.contentInput.files.length > 0)
            updateContentFromFile(elements.contentInput.files[0]);
    })

    elements.generateButton.addEventListener('click', () => {
        generateLink();
    });

    elements.previewButton.addEventListener('click', () => {
        goToPreview();
    });
}
