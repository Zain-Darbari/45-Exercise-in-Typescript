var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making Array of Countries and print its Orignal Order
var countriesTour = ["China", "Brazil", "Denmark", "Argentina"];
console.log("original order :", countriesTour);
// Print the Array in Alphabet order without modifying the acthual Array list
console.log("Copy Alphabet Order:", __spreadArray([], countriesTour, true).sort());
// Show tha the array is still in its original order
console.log("Still in Original Order :", countriesTour);
// Print the Array in Reverse Order without modifying the acthual Array list
console.log("Copy Reverse Order:", __spreadArray([], countriesTour, true).reverse());
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
