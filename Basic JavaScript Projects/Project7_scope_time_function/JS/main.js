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

