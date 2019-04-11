console.log("functions.js");

let firstName = "Heather";
let lastName = "Cleland";

console.log(`${firstName} ${lastName}`);

function displayName(lastName, firstName) {
    return (`${firstName} ${lastName} is awesome!`);
}

let myName = displayName("cat", "fish");
console.log("myName", myName);
let myNewestName = displayName("bacon", "crispy");
console.log(myNewestName);
displayName(true, "happy");
