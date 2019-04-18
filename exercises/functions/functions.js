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

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey", currentNumber) // Only 2, 4, 6 will appear
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey",  currentNumber)
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken", currentNumber)
    }
}
