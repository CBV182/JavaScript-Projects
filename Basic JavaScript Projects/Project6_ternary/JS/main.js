
/*Input from User*/
function model_function(){
    var height = document.getElementById("height").value;
    var model = height <170? "You are too short " : "You are tall enough";
    document.getElementById("model").innerHTML = model + " to model";
}


/*New_and_This*/

function dress (Model, Year, Color){
    this.dress_Model = Model;
    this.dress_Year = Year;
    this.dress_Color = Color;
}

var Kate = new dress("Gucci", 2021, "red");
var Emily = new dress("Channel",2020, "Black and White");
var Emma = new dress("Prada", 2022, "Blue");

function myfunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Kate wears a " + Kate.dress_Color + " "+ Kate.dress_Model + " manufactured in " + Kate.dress_Year;
}


/*Nested Function*/

function count(){
    document.getElementById("counting").innerHTML = count();
    function count () {
        var Starting_point = 22;
        function Plus_one() {Starting_point -=2}
        Plus_one();
        return Starting_point;
    }
}