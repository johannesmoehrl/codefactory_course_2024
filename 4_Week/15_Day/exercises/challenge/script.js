let cars = [];
class Car {
    constructor(year, model, price, img) {
        this.year = year;
        this.model = model;
        this.price = price;
        this.img = img;

        cars.push(this)
    }
    printInfo() {
        return `   <div class="card">
            <div class="card-body">
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <h5 class="card-title">${this.model}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary my-btns">Show more</a>
            </div>
            </div>`
    }
    showModal() {
        return `<img id="big-img" src="${this.img}" alt="Card image cap"></img>
                <h5>${this.model}</h5>
                <p>Year: ${this.year} <br> Price: ${this.price}</p>
                <a href="#" class="btn btn-danger" id="close-btn" >Show less</a>        
        `
    }
}

let car1 = new Car(2022, "Dodge Challenger", 150_000, "https://media.ed.edmunds-media.com/dodge/challenger/2023/oem/2023_dodge_challenger_coupe_gt_fq_oem_1_1600.jpg");
let car2 = new Car(2022, "BMW M3", 120_000, "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m3-110-1674509061.jpg?crop=0.732xw:0.548xh;0.0833xw,0.305xh&resize=1200:*");

for (let val of cars) {
    document.getElementById("result").innerHTML += val.printInfo();
}


let btns = document.querySelectorAll('.my-btns');
btns.forEach((element, i) => {
    element.addEventListener('click', () => {
        let modal = document.getElementById("modal1");
        modal.innerHTML = cars[i].showModal();

        modal.style.visibility = "visible";

        let closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click', () => {
            modal.style.visibility = "hidden";
        })
    })
});
