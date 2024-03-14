function dictionary() {
  var Fruit = {
    Color:"Red",
    calories:"45",
    Type:"Berries!",
  };
  delete Fruit.calories;
  document.getElementById("Fruit").innerHTML = Fruit.calories;
}