// Get an element reference where I will 
// output feedback to the DOM 
// var outputEl = document.getElementById("output-target");

// DOM reference 
// addEventListener takes 2 arguments. 
// 1st argument takes the name of the event we want to listen to 
// 2nd argument when the event has been heard do something
// Do something when this event is broadcast
// The browser sends the event as an input to the function
// document.getElementById("page-title").addEventListener("click", function(event) {
    // Now the function outputs to the user 
    // outputEl.innerHTML = `You clicked on the heading "${event.target.innerHTML}"`;
// });

// After the above function runs you have updated the DOM 
// This is an ES6 string: `You clicked on the heading "${event.target.innerHTML}"`

const outputEl = document.getElementById("article1");
const outputEl2 = document.getElementById("article2");

const inputEl = document.getElementById("message");

inputEl.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value;
    outputEl2.innerHTML = event.target.value;
});





