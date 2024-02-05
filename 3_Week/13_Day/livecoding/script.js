// for (let i = 1; i <= 100; i++) {
//     document.write(i + "<br>")
// }

let students = ["Johannes", "Mary", "Franz", "Dieter"];

// //Standard For-Loop
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }
// console.log("----------");
// //For of, brings only values, can only be used with arrays
// for (let val of students) {
//     console.log(val)
// }
// console.log("----------");
// //For in, brings you the index in => INDEX only with arrays
// for (let i in students) {
//     console.log(i, students[i]);
// }
// console.log("----------");
// //For each brings values and indexes, when multiple properties passed
// students.forEach(function (val, i) {
//     console.log(val, i)
// })
// students.forEach((val, i) => {
//     console.log(val, i)
// })

// let numbers = [50, 90, 20, 99, 5];

// let max = numbers[0];
// for (let val of numbers) {
//     if (val > max) {
//         max = val;
//     }
// }
// console.log(max)

let demo = document.getElementById('demo');
demo.innerHTML = "Hello World <hr>"
//To Add
// demo.innerHTML += "Hello World"
// demo.innerText = "Hellooo World <hr>"

document.getElementsByClassName("test")[0].innerHTML = "Aloha"
demo.style.color = "red";
