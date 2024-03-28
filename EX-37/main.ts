// Making a Function
function make_shirt (size : string = "large", print_message : string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${print_message} prints on shirt`)
}

// Calling a Function

make_shirt ();

// Calling a Function now with medium size and default message
make_shirt("medium");

// Calling a Function now with small size and diffrent print message
make_shirt("small","I love Javascript");