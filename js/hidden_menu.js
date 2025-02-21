const header = document.getElementById("header")
// headerの初期背景色を保持
const defaultBackgroundColor = header.style.backgroundColor;

const menuIcon = document.getElementById("menuIcon");
const hiddenMenu = document.getElementById("hiddenMenu");

/*
// 現在hidden menuは表示する状態になっているかを制御する変数(現在は使っていない。)
let boolean_hidden = true;
*/

menuIcon.addEventListener("click", () => {
    // boolean_hidden = !boolean_hidden;
    // hiddenMenu.hidden = boolean_hidden;
    hiddenMenu.hidden = !hiddenMenu.hidden;
    if(!hiddenMenu.hidden) header.style.backgroundColor = "#B10000";
    else header.style.backgroundColor = defaultBackgroundColor;
});
/*
menuIcon.addEventListener("mouseout", () => {
    hiddenMenu.hidden = boolean_hidden;
    if(!hiddenMenu.hidden) header.style.backgroundColor = "#B10000";
    else header.style.backgroundColor = defaultBackgroundColor;
});
*/
/*
menuIcon.addEventListener("mouseover", () => {
    menuIcon.style.opacity = 0.5;
    hiddenMenu.hidden = false;
    if(!hiddenMenu.hidden) header.style.backgroundColor = "#B10000";
    else header.style.backgroundColor = defaultBackgroundColor;
});
*/