
let students = ["John", "Jane"];
let mathGrades = [100, 85];

let result = prompt("Enter Student Name: ");
const studentName = students.find((element) => element == result);
const mathGrade = mathGrades[students.indexOf(studentName)];

let text = document.getElementById("text");
text.innerHTML = `${studentName} has reached points`;

let grade = document.querySelector("#grade");
console.log(grade)
grade.innerHTML = `${mathGrade}`
function changeBackground(mathGrade) {
    if (mathGrade < 60) {
        grade.style.color = "red"
    } else if (mathGrade > 60 && mathGrade < 70) {
        grade.style.color = "orange"
    } else if (mathGrade > 70 && mathGrade < 100) {
        grade.style.color = "green"
    } else {
        grade.style.color = "blue"
    }
}
changeBackground(mathGrade);
