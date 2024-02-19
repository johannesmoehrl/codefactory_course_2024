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
  // Properties
  brand: string;
  model: string;
  year: number;
  isRunning: boolean;
  price: number;

  // Constructor
  constructor(
    brand: string,
    model: string,
    year: number,
    isRunning: boolean = false,
    price: number
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isRunning = isRunning;
    this.price = price;
  }
  displayInfo() {
    console.log(
      `Vehicle Information: ${this.year} ${this.brand} ${this.model}, Running: ${this.isRunning}, Price: ${this.price}`
    );
  }
}

class Motorbike extends Vehicle {
  // Additional property specific to Motorbike
  numWheels: number;

  // Constructor for Motorbike
  constructor(
    brand: string,
    model: string,
    year: number,
    numWheels: number,
    isRunning: boolean = false,
    price: number
  ) {
    super(brand, model, year, isRunning, price);
    this.numWheels = numWheels;
  }
}

class Truck extends Vehicle {
  // Additional properties specific to Truck
  numAxles: number;
  capacityTons: number;

  // Constructor for Truck
  constructor(
    brand: string,
    model: string,
    year: number,
    numAxles: number,
    capacityTons: number,
    isRunning: boolean = false,
    price: number
  ) {
    super(brand, model, year, isRunning, price);
    this.numAxles = numAxles;
    this.capacityTons = capacityTons;
  }
}

const vehicles: Vehicle[] = [
  new Vehicle("BMW", "E30", 1992, true, 19_000),
  new Vehicle("Honda", "Civic", 2021, true, 21_000),
  new Truck("Scania", "Abc50", 2020, 6, 15, true, 120_000),
  new Motorbike("Kawasaki", "ninja", 2021, 2, false, 15_000),
];

let row = document.getElementById("row") as HTMLElement;

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

let modal = document.getElementById("info-modal") as HTMLElement;

function showModal(i: number) {
  let additionalInfoTruck = "";
  let additionalInfoMotorbike = "";

  if (vehicles[i] instanceof Truck) {
    additionalInfoTruck = `
      <p>Number of Axles: ${(<Truck>vehicles[i]).numAxles}</p>
      <p>Capacity (Tons): ${(<Truck>vehicles[i]).capacityTons}</p>
    `;
  } else if (vehicles[i] instanceof Motorbike) {
    additionalInfoMotorbike = `
    <p>Number of Whells: ${(<Motorbike>vehicles[i]).numWheels} </p>
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
        text.innerHTML = calcPrice(
          vehicles[i].year,
          vehicles[i].price,
          vehicles[i].isRunning
        );
      });
    });
  });
}

function calcPrice(year: number, price: number, isRunning: boolean) {
  let newPrice: number = price;
  if (isRunning) {
    newPrice += 500;
  } else {
    newPrice -= 500;
  }
  return ` ${newPrice}`;
}
