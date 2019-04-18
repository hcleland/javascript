console.log("functions.js");

// let firstName = "Heather";
// let lastName = "Cleland";

// console.log(`${firstName} ${lastName}`);

// function displayName(lastName, firstName) {
//     return (`${firstName} ${lastName} is awesome!`);
// }

// let myName = displayName("cat", "fish");
// console.log("myName", myName);
// let myNewestName = displayName("bacon", "crispy");
// console.log(myNewestName);
// displayName(true, "happy");

// console.log("qwerty . 6");

// let taco = "yummy";
// console.log(taco);

// console.log("cheeseburger");
// console.log("koala");

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("ChickenMonkey", currentNumber) // Only 2, 4, 6 will appear
//     } else if (currentNumber % 7 === 0) {
//         console.log("Monkey",  currentNumber)
//     } else if (currentNumber % 5 === 0) {
//         console.log("Chicken", currentNumber)
//     }
// }

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function (bandName) {
    console.log(bandNumber + ". " + bandName);
    bandNumber += 1;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const gravy = takeNumber("Gravy Train")
console.log(gravy)

const eagles = takeNumber("Flying Eagles")
console.log(eagles)