// let obj = `{
//     "name" : "John",
//     "age" : 33
// }`
// let object = JSON.parse(obj);
// console.log(object);

let students = `[
    {
        "name": "John",
        "age": 33,
        "gym": true,
        "likes": 0,
        "hobbies": ["read", "code"]
    },

    {
        "name": "test",
        "age": 21,
        "gym": true,
        "likes": 0,
        "hobbies": ["read", "code"]
    },

    {
        "name": "test2",
        "age": 41,
        "gym": true,
        "likes": 0,
        "hobbies": ["read", "code", "swim"]
    }
]`;

let studentsArray = JSON.parse(students)


let result = "";

for (let student of studentsArray) {
    result += `
    <div>
    <p class="badge badge-secondary" >${student.name}</p>
    <p>${student.age}</p>    
    <p>${student.gym}</p>    
    <span class="btn btn-danger my-btns">${student.likes}</span>    
    <br>
    `;

    for (let hobby of student.hobbies) {
        result += `
        <span class="badge bg-success">${hobby}</span>
        `
    }
    result += `</div>`

}

document.getElementById("result").innerHTML = result

let btns = document.querySelectorAll(".my-btns");
btns.forEach((element, i) => {
    element.addEventListener('click', () => {
        studentsArray[i].likes++;
        element.innerHTML = studentsArray[i].likes;
    })
});

localStorage.setItem("fname", "Johannes")
let fname = localStorage.getItem("fname")
console.log(fname);
localStorage.removeItem("fname")



