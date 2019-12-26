launchV86 = async function(type, content, dosImgUrl, screenContainer) {
  var contentBytes = Uint8Array.from(atob(content), c => c.charCodeAt(0));
  
  const config = {
    screen_container: screenContainer,
    bios: {
        url: "seabios.bin",
    },
    vga_bios: {
        url: "vgabios.bin",
    },
    fda: { },
    autostart: true
  };

  switch(type) {
    case 'com':
      const dosResponse = await fetch(dosImgUrl);
      const dosImg = new Uint8Array(await dosResponse.arrayBuffer());
      dosImg.set(contentBytes, 0x26000);
      config.fda.buffer = dosImg.buffer;
      break;

    case 'mbr':
      const fdaImg = new Uint8Array(1474560);
      fdaImg.set(contentBytes, 0);
      config.fda.buffer = fdaImg.buffer;
      break;

    default:
      throw new Error('Invalid type');
  }

  return new V86Starter(config);
}

formatUrl = function(url, type, fileInput) {
  return new Promise((res, rej) => {
    if (fileInput.files.length === 0) {
      rej(new Error('Please select a file'));
    }
    const file = fileInput.files[0];
    if (file.size > 1024) {
      rej(new Error('File is too large'));
    }
    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
      var rawUrl = url.split("?")[0].split("#")[0];
      var encodedContent = encodeURIComponent(btoa(String.fromCharCode(...new Uint8Array(reader.result))));
      res(`${rawUrl}?type=${type}&content=${encodedContent}`);
    });
    reader.readAsArrayBuffer(file);
  });
}

start = async function() {
  const urlParams = new URLSearchParams(window.location.search);
  const screenContainer = document.getElementById('screen_container');
  const [type, content] = urlParams.has('type') && urlParams.has('content')
    ? [urlParams.get('type'), urlParams.get('content')]
    : ['mbr', 'uBMAzRD8uACgjtiOwL54fb8gFC6tkbvwANHhuBg3cwO4OALooAEB34PrEHIK6JYBKd+D7wjr4oHHiAmB/qJ9ddKxBbgCAC6lq+L7tADNGjsWBPp09okWBPq0Ac0WtAB0As0WiOAsSHIMPAlzCLusfS7Xov75viDmrZetkzHA6CwAgDb/+YC4KA54B6Ai5rED0uDoMQG3IegbAbcu6BYBtyjoEQG3NOgMAeugdAPoFgGJ+DHSuUAB9/GI1AjEgOQHdVu1Nzht/xDkOK0AChDkOG0IEOQ4rcD+EOSE/3Qt9sMFdAw7FgD6sAJyDrAI6wo6BgL6sARyArABhMR1IojYhMR1HNDodfiwCOv0iRYA+qIC+qD++YTEdQYg3HQaiNiIRP6oBbuA/XUDuwIAqAx0AvfbAd+JfPzDAELn5///fjw8fvzw8Px+PP//////////PH7//+fnQgA8fv////9+PDx+29v///+lAAAAGBgAAAA8fj8PDz9+PAAA/n8CQgJC/39AQn5+AgJ/AsADQAJ/AkAC/n8CQv97QAp+fgJA/38AAJiqkFCYZKA8qFABAAAIAAIAAAStl62E5JOwMFDGRP8C6Ob+WFBTUVdQuzB9LteTuQgAiPjQ43ICMcCA/xByCoA9DnUD6Rf+MgWq4uaBxzgBWECoB3XSX1lbWMNPVao='];
  try {
    await launchV86(type, content, 'freedos.img', screenContainer);
  } catch(e) {
    screenContainer.textContent = e.message;
  }
}

generateUrl = async function() {
  const output = document.getElementById('output');
  const type = document.querySelector('input[name="imgtype"]:checked').value;
  const fileInput = document.getElementById('upload');
  try {
    const url = await formatUrl(location.href, type, fileInput);
    output.innerHTML = `<a href="${url}">${url}</a>`;
  } catch(e) {
    output.textContent = e.message;
  }
}


