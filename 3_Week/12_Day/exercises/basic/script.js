//Exercise 1
let temp = Math.round(Math.random() * 30 - 5);
if (temp <= 10) {
  console.log("The weather is cold");
} else {
  console.log("The Weather is moderate");
}

//Exercise 2
let food = ["pizza", "hamburger", "ice cream", "chocolate"];
function calculateRandomFood(food) {
  let randomNum = Math.round(Math.random() * 3);
  return food[randomNum];
}

const arrowCalculateRandomFood = (food) => food[Math.round(Math.random())];

let randomFood = calculateRandomFood(food);
let randomFood2 = arrowCalculateRandomFood(food);

console.log(randomFood);
console.log(randomFood2);

//Exercise 3

const crystalGazer = (numOfChilder, partnerName, location, job) =>
  console.log(
    `You will be a ${job} in ${location} and married to ${partnerName} with ${numOfChilder} Children`,
  );
crystalGazer(5, "Silke", "Wien", "Softwareentwickler");

//Exercise 4
const ageCalculator = (birthYear, currentYear) => {
  let age = currentYear - birthYear;
  return age;
};
let calcAge = ageCalculator(1999, 2024);
console.log(calcAge);

const ageCalcEnhanced = (birthYear) => {
  let date = new Date();
  let currentYear = date.getFullYear();
  return currentYear - birthYear;
};

let calcAge2 = ageCalcEnhanced(1999);
console.log(calcAge2);

const degreeToRadians = (degrees) => {
  console.log(degrees * (Math.PI / 180));
};
degreeToRadians(90);

const areaVolume = (width, height, depth) => {
  console.log("The area of the Box is " + width * height);
  console.log("The volume of the box is " + width * height * depth);
};
areaVolume(2, 7, 5);
