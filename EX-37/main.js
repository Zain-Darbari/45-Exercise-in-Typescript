// Making a Function
function make_shirt(size, print_message) {
    if (size === void 0) { size = "large"; }
    if (print_message === void 0) { print_message = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(print_message, " prints on shirt"));
}
// Calling a Function
make_shirt();
// Calling a Function now with medium size and default message
make_shirt("medium");
// Calling a Function now with small size and diffrent print message
make_shirt("small", "I love Javascript");
