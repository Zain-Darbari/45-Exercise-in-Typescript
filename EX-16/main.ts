let guestList =["Hamza", "Zain", "Usman", "Hammad"];
let dontCome = guestList [0];

console.log (dontCome, "Nhi a sakte");

guestList.splice(0, 1 , "Amirr");

console.log("Good news ! We have Found a Bigger Table for Dinner. ");

guestList.unshift("Ali");

guestList.push("Arib");

let middlevalue : number = Math.floor(guestList.length / 2 );

guestList.splice(middlevalue,0,"Osman");

console.log("Update list our Guests");

guestList.forEach(list => console.log(`Salam ${list} ,Would you like to dinner with me ?`));