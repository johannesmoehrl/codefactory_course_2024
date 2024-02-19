"use strict";
let firstName = "John Doe";
let age = 30;
console.log(firstName);
let numbersArr = [1, 2, 3];
let namesArr = ["John", "Dirk"];
let differentTypesArr = [2, 4, "John", true];
let animals = [
    {
        name: "Buddy",
        type: "dog",
        age: 3,
        adopted: true,
    },
];
let people = [
    {
        firstName: "John",
        age: 24,
        phoneNumber: 12345,
    },
    {
        firstName: "Anna",
        age: 24,
    },
];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}
let result = document.getElementById("result");
animals.forEach((animal, i) => {
    result.innerHTML += `
        <p>Name: ${animal.name}</p> 
        <p>Age: ${animal.age}</p> 
        <p>Adopted: ${animal.adopted}</p> 
        <hr> 
    `;
});
for (let animal of animals) {
    console.log(animal);
}
let obj = {
    name: "John",
    age: 20,
    email: "john@mail.com",
};
for (let element in obj) {
    console.log(element);
}
for (let [key, val] of Object.entries(obj)) {
    console.log(`Key ${key}, Value: ${val}`);
}
function greet(name) {
    //   if (name) {
    //     return `Hello ${name}`;
    //   } else {
    //     return `Hello Anonymous`;
    //   }
    return name ? `Hello ${name}` : "Hello Anonymous";
}
console.log(greet("Johannes"));
console.log(greet());
// let sum = (a: number, b:number) : number => {
//     return a+b
// }
let sum = (a, b) => a + b;
console.log(sum(12, 321));
function higherOrderFunc(callback) {
    console.log("I am going to call another function");
    callback();
}
function anotherFunc() {
    console.log("I am another function");
}
higherOrderFunc(anotherFunc);
