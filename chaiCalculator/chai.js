var prompt = require("prompt-sync") ();
//This is the function itself
function calculateChaiIngredients () {
    //prompt()-It prompts the user to enter the number of chai cups they want to make.
    const input = prompt(`Karibu! How many cupes of Chai Bora would you like to make?`)
    //I declared another variable numberOfCups which converts input from the user to a number incase they type out a string.
    const numberOfCups = Number(input)
    //These are the variables I used to represent the ingredients for the recipe for the chai. 
    let water = 200
    let milk = 50
    let majani = 1
    let sugar = 2
    //I used an if else statement so that the first condition represents the default value which is one cup.
    if (numberOfCups===1) {
        console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:\n
            Water: ${water} ml \n
            Milk: ${milk} ml \n
            Tea Leaves (Majani): ${majani} tablespoons \n
            Sugar (Sukari): ${sugar} teaspoons \n
            
            Enjoy your Chai Bora!`)
    //I used the else statement to represent any other value apart from 1 cup which then I multiply by the number of cups the user has put in to give them the correct values for the ingredients for the recipe.
    } else {
        console.log(`
            To make ${numberOfCups} cups of Kenyan Chai, you will need:
            Water: ${water * numberOfCups} ml 
            Milk: ${milk * numberOfCups} ml 
            Tea Leaves (Majani): ${majani * numberOfCups} tablespoons 
            Sugar (Sukari): ${sugar * numberOfCups} teaspoons 
            
            Enjoy your Chai Bora!
            `)
    }
    //Finally I return the numberOfCups.
    return numberOfCups
}
//I then invoke the function.
calculateChaiIngredients()
