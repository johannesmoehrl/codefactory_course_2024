//Exercise Basic
console.log('Hi my name is Martin');
let name = 'Johannes';
let age = 24;
console.log(`Hi, my name is ${name} and I am ${age} years old.`);
console.log("Hi my name is " + name + "and I am " + age + "old");

let players = ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki']
console.log("The most valuable player of the match is " + players[2])
console.log(`The mvp is ${players[2]}`)

//Excercise Intermediate
//Exercise1
let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
cars.sort();
console.log(cars);

//Exercise2
let fruits = ['apple', 'banana', 'kiwi', 'mango', 'pear'];
fruits.push('orange');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift('apple');
fruits.pop();
console.log(fruits);

fruits.shift()
fruits.unshift("Strawberry");
console.log(fruits);

//Exercise 3

let animals = ['monkey', 'horse', 'dog', 'elephant', 'giraffe'];

animals.shift();
console.log(animals);

animals.unshift("cat");
console.log(animals);

animals.pop();
console.log(animals);

animals.push("tiger");
console.log(animals);

animals.sort().reverse();
console.log(animals);

let str = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let arr = str.split("/");
console.log(arr);
let joinedArr = arr.join("\n");
console.log(joinedArr);





