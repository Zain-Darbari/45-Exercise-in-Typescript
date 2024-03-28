function sandwich(...items : string[]){
    console.log("Sandwich order:");

    for (let i = 0; i < items.length; i++){
        console.log(`- ${items[i]}`)
    }
}
console.log("Enjoy your lovely Sandwich Zain Darbari.");

sandwich("capsicum", "tomato", "chicken")
sandwich("beef", "cheese");
sandwich("garlic chicken", "mayo souce")