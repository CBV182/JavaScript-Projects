function counting(){
    var digit = "";
    var x = 1;
    while (x < 23){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}    