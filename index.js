// Use meanful and consistent names. 
// Prompt the user for froyo flavors upon entering site. 

// Plan - create an alert allowing user to input a string of names separated by commas

const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavorss.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
)

console.table(userInputString);

// User's input string is split into an array of strings. 
const FlavorsArray = userInputString.split(".");

// Use a loop to iterate through the array of flavors.

for (let i = 0; i < FlavorsArray.length; i++) {
    console.log(FlavorsArray[i]);
}



// Use an object to keep count of how many orders there are of each flavor.

const orders = { 
};

// for
// orders[FlavorsArray(i)];
// if 
 
    




// Correctly count the number of flavors in users input. 

// Organize the frequencies of elements in an array into a function that returns an object. 

