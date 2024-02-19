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

let container = document.getElementById("container");
let cartContainer = document.getElementById("cart");
let cart = []


flowers.forEach(flower => {
    container.innerHTML += `
    <div id="item">
            <h3>${flower.type}</h3>
            <img src="${flower.img}" alt="">
            <p>Price: ${flower.price}</p>
            <p>Quantity: ${flower.quantity}</p>
            <button class="add-btn">Add</button>
        </div> 
    `
});

let addBtns = document.querySelectorAll('.add-btn');

addBtns.forEach((element, i) => {
    element.addEventListener('click', () => {
        addFlowerToCart(flowers[i]);
        createCart(cart);
    })
});

function addFlowerToCart(flower) {
    if (cart.find((val) => val.type == flower.type)) {
        flower.quantity++;
    } else {
        cart.push(flower);
    }
}

function createCart(cart) {
    cartContainer.innerHTML = ""
    for (let item of cart) {
        cartContainer.innerHTML += `
        <div class="myclass">
                <img src="${item.img}" width="50">
                <p>${item.type}</p>
                <p>${item.price}</p>
                <button class="plusBtns">+</button>
                <p class="quantity">${item.quantity}</p>
                <button class="minusBtns">-</button>
                <button class="deleteBtns">X</button>
        </div>
    `
    }

    let plusBtns = document.querySelectorAll(".plusBtns");

    plusBtns.forEach((element, i) => {
        element.addEventListener('click', () => {
            cart[i].quantity++;
            document.querySelectorAll(".quantity")[i].innerHTML = cart[i].quantity;

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
            }
        })
    });

    let deleteBtns = document.querySelectorAll(".deleteBtns");

    deleteBtns.forEach((element, i) => {
        element.addEventListener('click', () => {
            cart[i].quantity = 1;
            cart.splice(i, 1);
            createCart();
        })
    });
}


