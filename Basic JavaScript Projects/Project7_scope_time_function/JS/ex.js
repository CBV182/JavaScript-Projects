/*Method*/
function date() {
    if (new Date().getHours() <8) {
    document.getElementById("morning").innerHTML = "Good morning?";
}
}