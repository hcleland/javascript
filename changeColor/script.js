// First I have to target the elements
// that I want to do something with
var colorBtn = document.querySelector("button");
var isRed = false;


// Next I can add the event listeners 
// to make things happen

//with anonymous callback function
colorBtn.addEventListener("click", function () {
    //if white
    if (isRed) {
        document.body.style.backgroundColor = "white";
        //isRed = false;
    } else {
        document.body.style.backgroundColor = "red";
        //isRed = true;
    }
    isRed = !isRed;
});
//colorBtn.addEventListener('click', changeColor);

//function changeColor() {
//    document.body.style.backgroundColor = "red";
//document.querySelector("body"); DOESN'T WORK ???
//document.getElementsByTagName("body")[0]; DOESN'T WORK ???
//}

//printReverse()
//Write a function printReverse() that takes an array as an argument
//and prints out the elements in the array in reverse order
array1 = [1, 2, 3, 4, 5];
function printReverse(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        console.log("each one =", array[index]);
    }
};
//printReverse(array1);

//isUniform()
//write a function isUniform() which takes an array as an argument
//and returns true if all elements in the array are identical
function isUniform(array) {
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== first) {
            return false;
        }
    }
    return true;
}

//isUniform([3, 3, 3]);


//sumArray()
//write a function sumArray() that accepts an array of numbers and 
//returns the sum of all numbers in the array
function sumArray(array) {
    let sum = 0
    array.forEach(element => {
        sum = element + sum;
    });
    console.log("sum", sum);
}

//sumArray([1, 2, 3, 4, 5]);

//write a function max() that accepts an array of numbers and
//returns the maximum number in the array
function max(array) {
    max = 0
    array.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    console.log("max", max);
}

// function max(arr) {
//     var max = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// max([7, 8, 9, 10]);

// var nums = [45, 65, 77, 34]

// nums.forEach(function (num) {
//     console.log(num);
// });

// myForEach(nums, function (num) {
//     console.log(num);
// });

//movie DB
//Create an array of movie objects. Each movie should have
//a title, rating, and hasWatched properties. Iterate through the 
//array and print out something that looks like:
//You have watched "In Bruges" - 5 stars
//You have not seen "Frozen" - 4.5 stars

var movies = [
    {
        title: "Wizard of Oz",
        rating: "5 stars",
        hasWatched: true
    },
    {
        title: "Hamilton",
        rating: "0 stars",
        hasWatched: false
    },
    {
        title: "Bohemian Rhapsody",
        rating: "4 stars",
        hasWatched: true
    }
]

movies.forEach(movie => {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating
    console.log(result);
});

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating;
    return result;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));
})

document.getElementById("first");
document.querySelector("#first");
document.getElementsByClassName("special")[0];
document.querySelector(".special");
document.getElementsByTagName("p")[0];


