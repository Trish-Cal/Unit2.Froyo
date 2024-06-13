// Use meanful and consistent names. 
// Prompt the user for froyo flavors upon entering site. 

// Plan - create an alert allowing user to input a string of names separated by commas - 
//step1 prompt user to enter strings separated by commas - 

const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//step2 take the variable from 1 and turn it into an array - 
const FlavorsArray = userInputString.split(","); // OUTPUT: ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]



//step3 go through array and create condessed listed where the flavors appear once with order count 
//condensed list should be an object that we create dynamically - another way of saying - Organize the frequencies of elements in an array into a function that returns an object. 


const ordersCondensed = {};
// 1. Use a loop to iterate through the array of flavors.
// 2. if flavors index exist then add 1 to the value
// else add flavors to orders
for (let i = 0; i < FlavorsArray.length; i++) {

    if(ordersCondensed[FlavorsArray[i]]){ // check if the order key exist in the order object
        ordersCondensed[FlavorsArray[i]] = ordersCondensed[FlavorsArray[i]] + 1 // same thing as writing  orders[FlavorsArray[i]] += 1
    } else { //if it does not exist run the code below
        ordersCondensed[FlavorsArray[i]] = 1 //creates a key and sets the value to 1
    }  
}

//step 4 turn that list into a table with console.table




// Use an object to keep count of how many orders there are of each flavor.
// orders.vanilla = 1 // dot notation has to exist 
// orders["vanilla"] = 1 // bracket notation does not have to exist



// console.log("ORDERS:\n", ordersCondensed)



console.table(ordersCondensed);
    








