//lock body scroll when tab right opened
var checked = false;

function ChangeOverFlowBody() {
    if (checked === false) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        checked = true;
    } else {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        checked = false;
    }
}

//appear form
function AppearBackgroundAndForm() {
    document.getElementById("background_form_appear_id").style.opacity = 0.7;
    document.getElementById("background_form_appear_id").style.visibility = "visible";
    document.getElementById("form_appear_id").style.opacity = 1;
    document.getElementById("form_appear_id").style.visibility = "visible";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
// close form
function HiddenForm() {
    document.getElementById("background_form_appear_id").style.opacity = 0;
    document.getElementById("background_form_appear_id").style.visibility = "hidden";
    document.getElementById("form_appear_id").style.opacity = 0;
    document.getElementById("form_appear_id").style.visibility = "hidden";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}