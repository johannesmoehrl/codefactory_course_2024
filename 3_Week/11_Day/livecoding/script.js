let finishedCourseTime = undefined;
let finishStudyingDate = null;
// undefined vs Null
// undefined is for the moment, can have a value later
// Null won't have a value in the future (?)

let firstName = 'John';
let lastName = 'Doe';
let message = 'Hello, World';

let fullName = `${firstName} ${lastName}`;
console.log(firstName.length)
//Length is a property and not a method
console.log(firstName.toLocaleUpperCase());

console.log(firstName.charAt(0));
console.log(fullName);
console.log(fullName.indexOf('o'));
console.log(message.split(','));

let result = '3' + 2;
console.log(typeof (result), result);

result = '3' - 2;
console.log(result);


result = '3' - '2';
console.log(result);

let str = '15';
let num = parseInt(str);
console.log(num);

let num1 = 12;
let str1 = String(num1);
console.log(str1);



let grades = [80, 85, 94, 70];
console.log(grades[2]);
grades[2] = 75;
console.log(grades)
console.log(grades.length)

const colors = ['red', 'white', 'yellow'];
colors[1] = 'green';
console.log(colors);

colors.push('purple');
console.log(colors);

colors.pop();
console.log(colors)

let removeElement = colors.pop();
console.log(removeElement);

//Unshift adds to beginning of array
colors.unshift('beige');
console.log(colors);

//deletes first item
colors.shift(colors);
console.log(colors)

let fruits = ["apple", "banana", "lemon", "orange", "kiwi"];

//Slice does not modify the array
let citrus = fruits.slice(2, 4);
console.log(citrus);

//splice(index, remove, add)
fruits.splice(2, 1);
console.log(fruits);

fruits.splice(3, 0, 'cherry', 'watermelon');
console.log(fruits);
console.log(fruits.sort());
