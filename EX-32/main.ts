// Array of Current_Users
let current_users = ["Sabhi", "Zain", "Ahmed", "Ali", "Faizan"];

// Array of New_Users
let new_users = ["Hamza", "Kashan", "Ali", "Mahad", "Zain"];

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user =>{
 
    // Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Diffrenet message using If-Else statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})