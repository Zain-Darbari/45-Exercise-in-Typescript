let comeGuest = ["Ayan", "Subhan", "Sabhi", "Abdul"];
let dontcome = comeGuest[0];

console.log(dontcome, "Nhi askata");

comeGuest.splice(0, 1, "Amir");

comeGuest.forEach(invitation => console.log (`salam ${invitation} ,would you like dinner with me ?`));