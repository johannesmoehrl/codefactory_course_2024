"use strict";
// class Person {
//   name: string;
//   age: number;
//   jobTitle: string;
//   constructor(name: string, age: number, jobTitle: string) {
//     this.name = name;
//     this.age = age;
//     this.jobTitle = jobTitle;
//   }
//   printGreeting() {
//     return `Hello there my ${this.name} i am ${this.age} years old and work as ${this.jobTitle}`;
//   }
// }
// class WorkingPerson extends Person {
//   salary: number;
//   jobLocation: string;
//   constructor(
//     name: string,
//     age: number,
//     jobTitle: string,
//     salary: number,
//     jobLocation: string
//   ) {
//     super(name, age, jobTitle);
//     this.salary = salary;
//     this.jobLocation = jobLocation;
//   }
//   printJob() {
//     call super to printGretting
//     return `and i get ${this.salary} every month and work in ${this.jobLocation}`;
//   }
// }
class Vehicle {
    // Constructor
    constructor(brand, model, year, isRunning = false, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = isRunning;
        this.price = price;
    }
    displayInfo() {
        console.log(`Vehicle Information: ${this.year} ${this.brand} ${this.model}, Running: ${this.isRunning}, Price: ${this.price}`);
    }
}
class Motorbike extends Vehicle {
    // Constructor for Motorbike
    constructor(brand, model, year, numWheels, isRunning = false, price) {
        super(brand, model, year, isRunning, price);
        this.numWheels = numWheels;
    }
}
class Truck extends Vehicle {
    // Constructor for Truck
    constructor(brand, model, year, numAxles, capacityTons, isRunning = false, price) {
        super(brand, model, year, isRunning, price);
        this.numAxles = numAxles;
        this.capacityTons = capacityTons;
    }
}
const vehicles = [
    new Vehicle("BMW", "E30", 1992, true, 19000),
    new Vehicle("Honda", "Civic", 2021, true, 21000),
    new Truck("Scania", "Abc50", 2020, 6, 15, true, 120000),
    new Motorbike("Kawasaki", "ninja", 2021, 2, false, 15000),
];
let row = document.getElementById("row");
vehicles.forEach((vehicle) => {
    row.innerHTML += `
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${vehicle.brand}</h5>
          <p class="card-text">${vehicle.model}</p>
          <a href="#" class="btn btn-primary btnShowMore">Show more</a>
        </div>
      </div> 
    </div>
    `;
});
let showMoreBtns = document.querySelectorAll(".btnShowMore");
showMoreBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        showModal(i);
    });
});
let modal = document.getElementById("info-modal");
function showModal(i) {
    let additionalInfoTruck = "";
    let additionalInfoMotorbike = "";
    if (vehicles[i] instanceof Truck) {
        additionalInfoTruck = `
      <p>Number of Axles: ${vehicles[i].numAxles}</p>
      <p>Capacity (Tons): ${vehicles[i].capacityTons}</p>
    `;
    }
    else if (vehicles[i] instanceof Motorbike) {
        additionalInfoMotorbike = `
    <p>Number of Whells: ${vehicles[i].numWheels} </p>
    `;
    }
    modal.innerHTML = `
    <h2>${vehicles[i].brand}</h2>
    <p>Model: ${vehicles[i].model}</p>
    <p>Year: ${vehicles[i].year}</p>
    <p>Running: ${vehicles[i].isRunning ? "Yes" : "No"}</p>
    <p>Buying Price: ${vehicles[i].price}</p>

    ${additionalInfoTruck}
    ${additionalInfoMotorbike}
    <div>
    <button class="btn btn-danger closeModalBtn" >Close</button>
    <button class="btn btn-success calcPriceBtn"> Price</button>

    <p id="calcPriceText"></p>

    </div>
    `;
    modal.style.display = "flex";
    let closeModalBtns = document.querySelectorAll(".closeModalBtn");
    closeModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });
    let calcPriceBtns = document.querySelectorAll(".calcPriceBtn");
    let calcPriceText = document.querySelectorAll("#calcPriceText");
    calcPriceBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            calcPriceText.forEach((text) => {
                text.innerHTML = calcPrice(vehicles[i].year, vehicles[i].price, vehicles[i].isRunning);
            });
        });
    });
}
function calcPrice(year, price, isRunning) {
    let newPrice = price;
    if (isRunning) {
        newPrice += 500;
    }
    else {
        newPrice -= 500;
    }
    return ` ${newPrice}`;
}
