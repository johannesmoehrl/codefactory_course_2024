// let sunnyDay = true;

// if (sunnyDay) {
//     console.log('Its sunny');
// } else {
//     console.log('Its rainy')
// }

// let num = 5;

// if (num > 0) {
//     console.log('The number is positive')
// } else if (num < 0) {
//     console.log('The number is negative')
// } else {
//     console.log('The number is zero')
// }

// let age = 17;
// let hasLicense = true

// if (age >= 18 && hasLicense) {
//     console.log('is allowed to drive');
// } else if (age < 18 || !hasLicense) {
//     console.log('is not allowed to drive');
// } else {
//     console.log('please enter a valid age and license status');
// }

// let dayOfTheWeek = 5;

// switch (dayOfTheWeek) {
//     case 1:
//         console.log('Today is Monday');
//         break;
//     case 2:
//         console.log('Today is Tuesday');
//         break;
//     case 3:
//         console.log('Today is Wednesday');
//         break;
//     case 4:
//     case 5:
//         console.log("Its a weekday");
//         break;
//     default:
//         console.log("Unknown day of the week")
// }


// function greet(name = "user") {
//     console.log(`Hello ${name} How are you ?`);
// };
// greet("Johannes");
// greet();

// //normal function

// function calcArea(length, width) {
//     let area = length * width;
//     return `The area of the rectangle is ${area}`;
// }

// let area = calcArea(10, 23);
// document.write(area)

//Anonymus function saved in a Varaible___

// const average = function (num1, num2, num3) {
//     let sum = num1 + num2 + num3;
//     return sum / 3
// };
// console.log(average(1, 2, 3))

// (function (x, y) {
//     console.log(x + y)
// })(3, 4);


//ARROW FUNCTIONS______________
// const greeting = (name) => {
//     return `Hello ${name}`
// }
// console.log(greeting('John'));

// const greeting2 = name2 => `Hello ${name2}`

// console.log(greeting2('Johannes'));

//SCOPE________________________

// let globalVariable = "I am a global Variable"
// console.log(globalVariable);

// function testFunction() {
//     let functionVariable = "I am a function Variable"
//     console.log(globalVariable);
//     console.log(functionVariable);

// }
// testFunction();

//Built-in Javascript Objects____

const pi = Math.PI;
console.log(pi);
//Math.floor rounds number to LOWEST integer
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum)

let num1 = Math.floor(4.2);
let num2 = Math.floor(4.8);
console.log(num1, num2);

num1 = Math.ceil(4.2);
num2 = Math.ceil(4.8);
console.log(num1, num2);

num1 = Math.round(4.2);
num2 = Math.round(4.8);
console.log(num1, num2);


let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
console.log(`Current date is: ${day}/${month}/${year}`)

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
console.log(`Current time is ${hours}:${minutes}:${seconds}`)


document.write(`Current time is ${hours}:${minutes}:${seconds}`)
alert(`Current date is: ${day}/${month}/${year}`)


