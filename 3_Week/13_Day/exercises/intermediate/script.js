
let allGrades =
    [["Martin", 76, 64, 81, 57, 94],
    ["Thomas", 85, 49, 81, 72, 55],
    ["Klaus", 65, 91, 84, 67, 85],
    ["Maria", 93, 70, 81, 64, 84],
    ["David", 81, 99, 71, 100, 69]
    ]
//76.72
const calculateAverage = arr => {
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum / arr.length
}

const calculateAllGrades = allGrades => {

    let allAverage = 0;
    for (i in allGrades) {
        let student = allGrades[i].shift()
        let average = calculateAverage(allGrades[i]);
        allAverage += average;
        logGrade(student, average)
    }
    logGrade("Total", allAverage);
}
// const calculateAllGradesAverage = allGrades => {
//     let averageArr = []
//     for (i in allGrades) {
//         allGrades[i].shift();
//         let averageStudent = calculateAverage(allGrades[i]);
//         averageArr.push(averageStudent);
//     }
//     let totalAverage = calculateAverage(averageArr);
//     logGrade("Total", totalAverage);
// }

const logGrade = (student, average) => {
    if (average < 60) {
        console.log(`${student} Grade is ${average} F`);
    } else if (average < 70) {
        console.log(`${student} Grade ${average} is D`);
    } else if (average < 80) {
        console.log(`${student} Grade ${average} is C`);
    } else if (average < 90) {
        console.log(`${student} Grade ${average} is B`);
    } else {
        console.log(`${student} Grade ${average} is A`);
    }
}

calculateAllGrades(allGrades);


for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}

let str = "";

for (i = 0; i <= 5; i++) {
    str += "*";
    console.log(str);
}


