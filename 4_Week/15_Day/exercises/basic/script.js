
console.log("------OBJECTS------")
let car = {
    brand: "mercedes",
    model: "cl500",
    hp: 200,
    showInfo: function () {
        return `${this.brand}, ${this.model}, ${this.hp}`
    }
}
console.log(car.showInfo())
let car2 = {
    brand: "subaru",
    model: "impreza",
    hp: 200,
    showInfo: function () {
        return `${this.brand}, ${this.model}, ${this.hp}`
    }
}
console.log(car2.showInfo())
let car3 = {
    brand: "Audi",
    model: "Q4",
    hp: 200,
    showInfo: function () {
        return `${this.brand}, ${this.model}, ${this.hp}`
    }
}
console.log(car3.showInfo())


let animal = {
    type: "cat",
    age: 5,
    showInfo: function () {
        return `${this.type}, ${this.age}`
    }
}
console.log(animal.showInfo())
let animal2 = {
    type: "beaver",
    age: 2,
    showInfo: function () {
        return `${this.type}, ${this.age}`
    }
}
console.log(animal2.showInfo())
let animal3 = {
    type: "rabbit",
    age: 2,
    showInfo: function () {
        return `${this.type}, ${this.age}`
    }
}
console.log(animal3.showInfo())


let person = {
    fname: "Johannes",
    lname: "Möhrl",
    age: 24,
    showInfo: function () {
        return `${this.fname}, ${this.lname} , ${this.age}`
    }
}
console.log(person.showInfo())
let person2 = {
    fname: "Franz",
    lname: "Manz",
    age: 21,
    showInfo: function () {
        return `${this.fname}, ${this.lname} , ${this.age}`
    }
}
console.log(person2.showInfo())
let person3 = {
    fname: "Hans",
    lname: "Gans",
    age: 69,
    showInfo: function () {
        return `${this.fname}, ${this.lname} , ${this.age}`
    }
}
console.log(person3.showInfo())
console.log("------CLASSES------")


class Car {
    constructor(brand, model, hp) {
        this.brand = brand;
        this.model = model;
        this.hp = hp;
    }
    showInfo() {
        return `${this.brand}, ${this.model}, ${this.hp}`
    }
}

let car4 = new Car("Ferrari", "f40", 650);
console.log(car4.showInfo())

class Animal {
    constructor(type, age) {
        this.type = type;
        this.age = age;
    }
    showInfo() {
        return `${this.type}, ${this.age}`
    }
}

let animal4 = new Animal("Eagle", 3);
console.log(animal4.showInfo());

class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    showInfo() {
        return `${this.fname}, ${this.lname} , ${this.age}`
    }
}

let person4 = new Person("Dieter", "Ingo", 39);
console.log(person4.showInfo());


class Motorbike extends Car {
    constructor(brand, model, hp, numberOfWheels) {
        super(brand, model, hp)
        this.numberOfWheels = numberOfWheels
    }
    showInfo() {
        return `${this.brand}, ${this.model}, ${this.hp}, ${this.numberOfWheels}`
    }
}
let motorbike = new Motorbike("Kawasaki", "Ninja", 200, 2);
console.log(motorbike.showInfo())

class Fish extends Animal {
    constructor(type, age, typeOfWater) {
        super(type, age)
        this.typeOfWater = typeOfWater;
    }
    showInfo() {
        return `${this.type}, ${this.age}, ${this.typeOfWater}`
    }
}
let fish1 = new Fish("tuna", 4, "saltwater");
console.log(fish1.showInfo());

class Profession extends Person {
    constructor(fname, lname, age, jobPosition) {
        super(fname, lname, age)
        this.jobPosition = jobPosition;
    }
    showInfo() {
        return `${this.fname}, ${this.lname}, ${this.age}, ${this.jobPosition}`
    }
}
let profession1 = new Profession("Johannes", "Möhrl", 24, "Softwareengineer");
console.log(profession1.showInfo());
