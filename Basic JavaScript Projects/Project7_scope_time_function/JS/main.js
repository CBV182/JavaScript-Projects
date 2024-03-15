/*Global Variable*/

var x= 5;
function add_number_1(){
    document.write(40 + x + "<br>");
}

function add_number_2(){
    document.write(x + 325 + "<br>");
}

add_number_1();
add_number_2();

/*Local Variable*/

function add_number_3(){
    var y = 2;
    document.write(72 + y + "<br>");
}

function add_number_4(){
    document.write( y + 364);
}

add_number_3();
add_number_4();

/*Console.log() method to debug*/

function add_number_5(){
    var k = 2;
    console.log(72 + k);
}

function add_number_6(){
    console.log(k + 364);
}

add_number_5();
add_number_6();

/*Method*/
function morning() {
    if (new Date().getHours() <8) {
    document.getElementById("morning").innerHTML = "Good morning!";
}
}

/*IF statement*/
function hey() {
const time = new Date().getHours();
let greeting;
if (time < 11) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("if").innerHTML = greeting;}

/*Else statement*/
function Age_Function(){
    k = document.getElementById("weight").value;
    if (k<=10){
        weight ="Your baggage is according with regulation"
    }
    else{
        weight = "Your baggage excced weight limit";
    }
    document.getElementById("baggage").innerHTML = weight;
}
