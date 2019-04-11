// console.log("object.js");

// const cupcake = {
//     color : ["pink", "white", "brown"],
//     flavor : "chocolate",
//     size : "mini",
//     calories : 0,
//     icing :  true,
//     eatCupcake: () => {
//         console.log("yum");
//     }
// }

// console.log("cupcake", cupcake);

// console.log("what color do we have", cupcake.color);

// for (i = 0; i < cupcake.color.length; i++) {
//     console.log("cupcake colors", cupcake.color[i]);
// }

// cupcake.color.forEach(color => {
//     console.log("what is color", color);
//     console.log("and this is the long way to get " + color + " and some more");
//     console.log(`the color again is ${color} and that is a great color`);
//     // ^^ the line above is a template string ^^
// })

// const car = {
//     make : "Ford",
//     model : "Mustang",
//     color : "red",
//     year : "2015"
// }

// console.log("my car is a ", car);
// console.log("my car is a", car.color, car.year, car.make, car.model);

// var animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

// console.log(animalNames);

// // const family = {
// //     name : ["Dad", "Mom", "Son", "Daughter"],
// //     age : [50, 40, 30, 20]
// // }

// var familyMembers = [{name : ["Dad", "Mom", "Son", "Daughter"]}, {age : [50, 40, 30, 20]}]

// console.log(familyMembers);

// var familyMembers = [
//     dad = {
//         name : "Jack",
//         age : 30,
//         food : "pasta",
//     },
//     sister = {
//         name : "Sue",
//         age : 12, 
//         food : "pizza"
//     }
// ]

// const family = {
//     members: [
//         {
//             name: "sally", 
//             age: 20
//         },
//         {
//             name: "bill",
//             age: 2
//         }
//     ]
// }

// const myFamily = [
//     {
//         name: "John",
//         age: 5
//     },
//     {
//         name: "Bell",
//         age: 10
//     },
//     {
//         name: "Bonnie",
//         age: 73
//     }
// ]

// console.log("myFamily", myFamily);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Use dot notation to output all of the dimensions of the Empire State Building to the console

console.log(empireStateBuilding.height, empireStateBuilding.squareFeet);

// Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const stories = empireStateBuilding.stories
const cost = empireStateBuilding.cost
console.log([stories, cost])

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.partTime[i]);
}

for (i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.fullTime[i]);
}

