// Creating a Array 
var pizza = ["Chiken Tikka", "Super Creamy", "Malai Cheese", "Fajita"];
// Using for loop 
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var linePizza = pizza_1[_i];
    console.log("I like ".concat(linePizza, ", Pizza."));
}
// Print a message outside of the foor-loop
console.log("Pizza is Love");
