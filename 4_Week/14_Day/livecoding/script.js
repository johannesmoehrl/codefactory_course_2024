
// //no parentheses because we dont want to call it immediantly
// btn.onclick = greetingsTwo;

// function greetingsTwo() {
//     console.log("greetings two");
// }


let btn = document.getElementById('my-btn');
const myList = document.getElementById('my-list');


btn.addEventListener('click', () => {
    const inputValue = document.getElementById('my-input').value;

    if (inputValue != '') {
        myList.innerHTML += `<li>${inputValue}</li>`
    } else {
        // alert("Your input is empty")
    }
})


const myInput = document.getElementById('my-input');
myInput.addEventListener('change', keyUpFunc);

function keyUpFunc() {
    console.log(myInput.value)
}


//Navbar

const navBtn = document.getElementById('nav-btn');
const nav = document.querySelector('nav');
let navVisible = false;

navBtn.addEventListener('click', () => {
    if (!navVisible) {
        nav.style.translate = "0 0";
    } else {
        nav.style.translate = "-200px 0";
    }
    navVisible = !navVisible;
})


const newBtn = document.getElementsByClassName('test')[0];

newBtn.addEventListener('click', moveElementRight)

let isThereAMargin = false;
function moveElementRight() {
    if (isThereAMargin) {
        newBtn.style.marginLeft = "0px"
        isThereAMargin = false;
    } else {
        newBtn.style.marginLeft = "100px"
        isThereAMargin = true;
    }
}



let sections = document.querySelectorAll('.section');

let deleteBtns = document.querySelectorAll('.delete-btn')

deleteBtns.forEach((element, index) => {
    element.addEventListener('click', () => {
        // sections[index].style.display = "none"
        sections[index].remove()
    })
})


