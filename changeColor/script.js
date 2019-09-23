// First I have to target the elements
// that I want to do something with
const colorBtn = document.querySelector('.colorBtn');

const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998'];

// Next I can add the event listeners 
// to make things happen
colorBtn.addEventListener('click', changeColor);

function changeColor() {
    //bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random() * colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}

