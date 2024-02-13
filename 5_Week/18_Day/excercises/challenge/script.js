let flowers = [
    {
        type: "Orchidea",
        img: "https://cdn.pixabay.com/photo/2020/03/10/23/10/orchid-4920533_1280.jpg",
        price: 25,
        quantity: 1,
    },
    {
        type: "Rose",
        img: "https://cdn.pixabay.com/photo/2018/11/08/12/02/rose-3802424_1280.jpg",
        price: 15,
        quantity: 1,
    },
    {
        type: "Tulip",
        img: "https://cdn.pixabay.com/photo/2014/04/09/15/39/tulips-320151_1280.jpg",
        price: 12,
        quantity: 1,
    },
    {
        type: "Lily",
        img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729514_1280.jpg",
        price: 18,
        quantity: 1,
    },
    {
        type: "Sunflower",
        img: "https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_1280.jpg",
        price: 20,
        quantity: 1,
    }
];


let rowContainer = document.getElementById("row-container");
let cartContainer = document.getElementById("cart");
let totalContainer = document.getElementById("total");

flowers.forEach(flower => {
    rowContainer.innerHTML += `
    <div>
        <div class="card" style="width: 18rem;">
          <img src="${flower.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${flower.type}</h5>
            <p class="card-text">Price: ${flower.price} €</p>
            <p class="card-text">Quantity: ${flower.quantity}</p>
            <a class="btn btn-primary add-btn">Add to Cart</a>
          </div>
        </div> 
    </div>
    `
});

let addBtn = document.querySelectorAll(".add-btn");

let cart = [];

addBtn.forEach((button, i) => {
    button.addEventListener("click", () => {
        addToCart(flowers[i]);
        console.log(cart)

    })
});

function addToCart(flower) {
    if (cart.find((val) => val.type == flower.type)) {
        flower.quantity++;
    } else {
        cart.push(flower);
    }
    createCart();
    calculateTotal();
    calculateCount();
}
function createCart() {
    cartContainer.innerHTML = ""
    for (let item of cart) {
        cartContainer.innerHTML += `
        <div class="myclass">
                <img src="${item.img}" width="50">
                <p>${item.type}</p>
                <p>${item.price}</p>
                <p class="btn btn-success plusBtns">+</p>
                <p class="quantity">${item.quantity}</p>
                <p class="btn btn-warning minusBtns">-</p>
                <p class="btn btn-danger deleteBtns">X</p>
        </div>
        `
    }

    let plusBtns = document.querySelectorAll(".plusBtns");

    plusBtns.forEach((element, i) => {
        element.addEventListener('click', () => {
            cart[i].quantity++;
            document.getElementsByClassName("quantity")[i].innerHTML = cart[i].quantity;
            calculateTotal();
            calculateCount();
        })
    });

    let minusBtns = document.querySelectorAll(".minusBtns");

    minusBtns.forEach((element, i) => {
        element.addEventListener('click', () => {
            if (cart[i].quantity != 1) {
                cart[i].quantity--;
                document.getElementsByClassName("quantity")[i].innerHTML = cart[i].quantity;
            } else {
                cart.splice(i, 1);
                createCart();
                calculateTotal();
                calculateCount();
            }
        })
    });

    let deleteBtns = document.querySelectorAll(".deleteBtns");

    deleteBtns.forEach((element, i) => {
        element.addEventListener('click', () => {
            cart[i].quantity = 1;
            cart.splice(i, 1);
            createCart();
            calculateTotal();
            calculateCount();
        })
    });
}

function calculateTotal() {
    let total = 0;
    for (let item of cart) {
        total = total + item.quantity * item.price;
    }
    if (total > 100) {
        total = total - (total * 0.1)
        document.getElementById("discount").innerHTML = "Discount 10%"

    }
    document.getElementById("total").innerHTML = total + " €";
}

function calculateCount() {
    let count = 0;
    for (let item of cart) {
        count = count + item.quantity
    }
    document.getElementById("count").innerHTML = count + " pcs"
}



