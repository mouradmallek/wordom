function removeBtnBorder(clickedId) {
    let btn = document.getElementById(clickedId);
    btn.classList.remove("btn-border");

}

function addBtnBorder(clickedId) {
    let btn = document.getElementById(clickedId);
    btn.classList.add("btn-border");
}

function processClasses(classToToggle, clickedId) {
    let textArea = document.getElementById("textZone");
    if (textArea.classList.contains(classToToggle)) {
        textArea.classList.remove(classToToggle)
        removeBtnBorder(clickedId);
    } else {
        textArea.classList.add(classToToggle);
        addBtnBorder(clickedId);
    }
}

function makeBlod(clickedId) {
    let classToToggle = "blod";
    processClasses(classToToggle, clickedId);
}

function makeItalic(clickedId) {
    let classToToggle = "italic";
    processClasses(classToToggle, clickedId);
}

function makeUnderline(clickedId) {
    let classToToggle = "underline";
    processClasses(classToToggle, clickedId);
}

function makeBlue(clickedId) {
    let classToToggle = "blue";
    processClasses(classToToggle, clickedId);
}

function makeBiggerOrSmaller(toAdd) {
    let textArea = document.getElementById("textZone");
    //let style = getComputedStyle(textArea, null).getPropertyValue('font-size');
    let style = getComputedStyle(textArea, null).fontSize;
    let fontSize = parseFloat(style);
    if (toAdd) {
        textArea.style.fontSize = (fontSize + 2) + 'px';
    } else {
        textArea.style.fontSize = (fontSize - 2) + 'px';
    }
}

function makeBigger() {
    makeBiggerOrSmaller(true)

}

function makeSmaller() {
    makeBiggerOrSmaller(false)
}