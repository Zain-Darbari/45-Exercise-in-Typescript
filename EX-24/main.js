// Define Variables
var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Banana", "Mango", "Orange"];
// Test for equality and inequality with strings
console.log("\napple is equal to apple ?");
console.log(apple == apple);
console.log("\napple is not equal to apple ?");
console.log(apple != apple);
// Test using lower case
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() != "apple");
// Numerical test
// Equal to
console.log("\nIs ten is equal to  twenty ?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to  twenty ?");
console.log(ten != twenty);
// Greater than 
console.log("\nIs ten greater than zero ?");
console.log(ten > 0);
// Less than
console.log("\nTwenty is less than 10 ?");
console.log(twenty < 10);
// Greater than or Equal to
console.log("\nIs ten is greater than or equal to five");
console.log(ten >= 5);
// Less than or Equal to
console.log("\nIs twenty is less than or equal to ten");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
// Using "and &"
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
// Using "|| or"
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 not is equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in array
console.log("\n is orange include my fruit array");
console.log(fruits.includes("Orange"));
console.log("\n is orange not include my fruit array");
console.log(!fruits.includes("Orange"));
