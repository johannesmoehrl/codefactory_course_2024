let firstName: string = "John Doe";
let age: number = 30;

console.log(firstName);

let numbersArr: number[] = [1, 2, 3];
let namesArr: Array<string> = ["John", "Dirk"];

let differentTypesArr: any[] = [2, 4, "John", true];

let animals: { name: string; type: string; age: number; adopted: boolean }[] = [
  {
    name: "Buddy",
    type: "dog",
    age: 3,
    adopted: true,
  },
];

let people: Array<{ firstName: string; age: number; phoneNumber?: number }> = [
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

let result = document.getElementById("result") as HTMLElement;
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

let obj: { name: string; age: number; email: string } = {
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

function greet(name?: string): string {
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

let sum = (a: number, b: number): number => a + b;
console.log(sum(12, 321));

function higherOrderFunc(callback: () => void) {
  console.log("I am going to call another function");
  callback();
}
function anotherFunc(): void {
  console.log("I am another function");
}

higherOrderFunc(anotherFunc);
