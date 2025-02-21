const header = document.getElementById("header")
const defaultBackgroundColor = header.style.backgroundColor;
const menuIcon = document.getElementById("menuIcon");
const hiddenMenu = document.getElementById("hiddenMenu");
let boolean_hidden = true;

menuIcon.addEventListener("mouseover", () => {
    hiddenMenu.hidden = false;
    if(!hiddenMenu.hidden) header.style.backgroundColor = "#B10000";
    else header.style.backgroundColor = defaultBackgroundColor;
});

menuIcon.addEventListener("click", () => {
    boolean_hidden = !boolean_hidden;
    hiddenMenu.hidden = boolean_hidden;
    if(!hiddenMenu.hidden) header.style.backgroundColor = "#B10000";
    else header.style.backgroundColor = defaultBackgroundColor;
});

menuIcon.addEventListener("mouseout", () => {
    hiddenMenu.hidden = boolean_hidden;
    if(!hiddenMenu.hidden) header.style.backgroundColor = "#B10000";
    else header.style.backgroundColor = defaultBackgroundColor;
});
