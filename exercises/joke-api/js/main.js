console.log("I'm here");

const setupElement = document.querySelector("#setup");
const punchlineElement = document.querySelector("#punchline");

function addToDom(jokeObject){
    setupElement.innerHTML = `<h4>${jokeObject.setup}</h4>`;
    punchlineElement.innerHTML = `<p>${jokeObject.punchline}</p>`;
}

fetch("https://official-joke-api.appspot.com/random_joke")
    .then(result => result.json())
    .then(parsedJSON => {
        console.log("joke", parsedJSON.punchline, parsedJSON.setup);
        addToDom(parsedJSON);
    })

