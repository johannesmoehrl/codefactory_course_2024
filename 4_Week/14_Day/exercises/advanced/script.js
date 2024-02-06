const body = document.querySelector('body')
const circle = document.getElementById('circle');
const text = document.getElementById('text');


circle.addEventListener('mouseover', () => {
    text.innerHTML = "You are in the circle"
})

circle.addEventListener('mouseleave', () => {
    text.innerHTML = "You are outside of the circle"
})

let state = true;

circle.addEventListener('click', () => {
    if (state) {
        circle.style.backgroundColor = "grey"
        state = false;
    } else {
        circle.style.backgroundColor = "black"
        state = true;
    }
})

circle.addEventListener('dblclick', () => {
    if (state) {
        circle.style.backgroundColor = "blue"
        state = false;
    } else {
        circle.style.backgroundColor = "black"
        state = true;
    }
})
