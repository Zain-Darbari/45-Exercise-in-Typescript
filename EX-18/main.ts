// Making Array of Countries and print its Orignal Order
let countriesTour : string[] = ["China", "Brazil", "Denmark", "Argentina"];
console.log("original order :", countriesTour);

// Print the Array in Alphabet order without modifying the acthual Array list
console.log("Copy Alphabet Order:", [...countriesTour].sort());

// Show tha the array is still in its original order
console.log("Still in Original Order :", countriesTour);

// Print the Array in Reverse Order without modifying the acthual Array list
console.log("Copy Reverse Order:", [...countriesTour].reverse());

// Show tha the array is still in its original order
console.log("Still in Original Order :", countriesTour);

// We haveChanged the Original Array Order now 
console.log("Original Array Reverse:", countriesTour.reverse());

// Print the Array to show that it is back to its orignal order
console.log("Back to original order:", countriesTour.reverse());

// Print the Array  to show that its Order Has been Changed in Alphabet Orde Now
console.log("Sort in alphabet order:", countriesTour.sort());

// We haveChanged again the Original Array Order now 
console.log("Original Array Reverse Again:", countriesTour.reverse());