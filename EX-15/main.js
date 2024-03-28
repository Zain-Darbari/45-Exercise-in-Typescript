var comeGuest = ["Ayan", "Subhan", "Sabhi", "Abdul"];
var dontcome = comeGuest[0];
console.log(dontcome, "Nhi askata");
comeGuest.splice(0, 1, "Amir");
comeGuest.forEach(function (invitation) { return console.log("salam ".concat(invitation, " ,would you like dinner with me ?")); });
