//Intermediate
const average = function (num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum / 3
};

const capitalizeFirstLetter = function (str) {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(capitalized);
}
capitalizeFirstLetter("i am a web developer");

const averageGrade = (math, physics, english) => {
    let sum = math + physics + english;
    let average = sum / 3;
    console.log(`Sum: ${sum} \nAverage: ${average}`);
}
averageGrade(3, 4, 5);

//Advanced

const timeConvert = minutes => {
    let hours = Math.floor(minutes / 60)
    let restMin = minutes - hours * 60;
    console.log(`${hours} minutes = 3 hour(s) and ${restMin} minutes(s)`)

}

timeConvert(200);