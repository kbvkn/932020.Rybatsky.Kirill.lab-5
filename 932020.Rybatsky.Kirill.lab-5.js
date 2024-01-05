function openText(textId) {
    let infoblock = document.getElementById('New' + textId);
    let smoke = document.getElementById('smoke-block');

    infoblock.style.visibility = "visible";
    smoke.style.visibility = "visible";
}

function closeText() {
    let infoblocks = document.getElementsByClassName("opened-window");
    let smoke = document.getElementById('smoke-block');

    for (let i = 0; i < infoblocks.length; i++) {
        infoblocks[i].style.visibility = "hidden";
    }

    smoke.style.visibility = "hidden";
}