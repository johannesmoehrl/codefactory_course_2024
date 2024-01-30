//Advanced
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

let sum = a + b + parseInt(c) + parseInt(d) + e;

let f = '1';
let g = 15;
let h = 8;
let i = "1";

let sum2 = parseInt(f) + g + h + parseInt(i);

let mult = sum * sum2;
console.log(mult / sum);
console.log(mult / sum2);

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people)
people.unshift("Matt");
people.pop();
people.push("Johannes");
console.log(people)
let peopleCopy = people.slice(1, 3)
console.log(peopleCopy);
console.log(peopleCopy.indexOf('Mary'));
console.log(peopleCopy.indexOf('Foo'));
console.log(people);
people.shift();
people.unshift("Greg");
people.pop();
people.push("James");
console.log(people);

people.splice(2, 1, "Elizabeth", "Anna");
console.log(people)


let multiArr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]]
console.log(multiArr[1][1], multiArr[4][2], multiArr[5][3], multiArr[2][3], multiArr[2][1])
//Challenge

let str = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
let newStr = str.split("$").join(" ");
console.log(newStr);