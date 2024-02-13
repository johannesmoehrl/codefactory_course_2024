let student1 = {
    fname: "John",
    lname: "Doe",
    age: 20,
    printInfo: function () {
        return `${this.fname} ${this.lname}, ${this.age}`;
    }
}
// class Student {
//     fname;
//     lname;
//     age;
//     constructor(fname, lname, age) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }
//     printInfo() {
//         return `${this.fname} ${this.lname}, ${this.age}`;
//     }
// }


let students = [];
class Student {
    // uniform = false

    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        if (age < 1) {
            this.age = 1;
        } else {
            this.age = age;
        }


        students.push(this);
    }


    printInfo() {
        return `   <div class="card"">
            <div class="card-body">
                <h5 class="card-title">${this.fname} ${this.lname}</h5>
                <p class="card-text">${this.age}</p>
                <a href="#" class="btn btn-primary my-btns">Go somewhere</a>
            </div>
            </div>`
    }
}

class Teacher extends Student {
    constructor(fname, lname, age, salary, jobtitle) {
        super(fname, lname, age);
        this.salary = salary;
        this.jobtitle = jobtitle;
    }
    printInfo() {
        return `${super.printInfo()} ${this.salary} ${this.jobtitle}`
    }
}

let student2 = new Student("Mary", "Doe", 29);
let student3 = new Student("Johannes", "Möhrl", 24);

console.table(students)

for (let val of students) {
    document.getElementById("result").innerHTML += val.printInfo();
}

let btns = document.querySelectorAll('.my-btns');
btns.forEach((element, i) => {
    element.addEventListener('click', () => {
        console.log(students[i].fname + " " + students[i].lname)
    })
});
