/*concat() Method*/

function Full_Sentence(){
    var part_1 = "Group ";
    var part_2 = "of words ";
    var part_3 = "that works ";
    var part_4 = "together.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

/*slice() Method*/

function slice_Method(){
    var Sentence = "Trust the magic of new beginnings.";
    var Section = Sentence.slice(10,15);
    document.getElementById("Slice").innerHTML = Section;
}

/*Methods Challenge*/


var sentence = 'if i had a world of my own, everything would be nonsense';
var capitalizedSentence = sentence[0].toUpperCase() + sentence.slice(1).toLocaleUpperCase();

document.write(capitalizedSentence);

/*Number Methods*/
function String_Method(){
    var X = 359;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}
