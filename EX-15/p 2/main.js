var comeGuets = ["King", "Amir", "Goat", "Messi"];
var dontCome = comeGuets[3];
console.log(dontCome, "Nhi ahh sakta");
comeGuets.splice(3, 4, "CR7");
comeGuets.forEach(function (newlist) { return console.log("Salam, ".concat(newlist, " would you like to dinner with me ? ")); });
