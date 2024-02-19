"use strict";
// let result = document.getElementById("result") as HTMLElement;
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let res: number = i * j;
//     console.log(`${j} X ${i} = ${res}`);
//     result.innerHTML += `${j} x ${i} = ${res} <br>`;
//   }
// }
let persons = [
    {
        firstName: "Johannes",
        lastName: "Möhrl",
    },
    {
        firstName: "Johannes",
        lastName: "Möhrl",
    },
];
persons.forEach((person) => {
    console.log(person.firstName);
    setTimeout(() => {
        console.log(person.lastName);
    }, 5000);
});
let nameArr = ["Jojo", "Dirk", "Peter"];
nameArr.forEach((element, i) => {
    console.log(element, i);
});
