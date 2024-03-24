function counting(){
    var digit = "";
    var x = 1;
    while (x < 23){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}    

/*The length Property*/

let text = "Hello World!";
let length = text.length;

document.getElementById("length").innerHTML = length;


/*For Loops*/

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;

function Forloop() {
    for (Y = 0; Y < instruments.length; Y++){
        content += instruments[Y] + "<br>";
    }
    document.getElementById("Instruments").innerHTML = content;
}  

/*Arrays and Objects*/

function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture [2] + ".";
}

/*Const*/

function Constant(){
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Const").innerHTML = "The cost of the " + 
    Musical_Instrument.type + " was " + Musical_Instrument.price + "."; 
}

/*Const2*/
function Const2(){
var x = 10
x = 8;
document.write(x);
}