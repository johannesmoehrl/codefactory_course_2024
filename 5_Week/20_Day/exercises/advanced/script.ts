let row = document.getElementById("row") as HTMLElement;

interface FoodItem {
  foodType: string;
  img: string;
  text: string;
  price: number;
}

const foods: FoodItem[] = [
  {
    foodType: "Pizza",
    img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    text: "Margherita Pizza",
    price: 12.99,
  },
  {
    foodType: "Burger",
    img: "https://cdn.pixabay.com/photo/2016/11/18/15/03/burger-1835192_1280.jpg",
    text: "Classic Cheeseburger",
    price: 8.99,
  },
  {
    foodType: "Pasta",
    img: "https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454_1280.jpg",
    text: "Tasty Pasta",
    price: 14.99,
  },
  {
    foodType: "Salad",
    img: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
    text: "Tasty Salad",
    price: 6.99,
  },
  {
    foodType: "Ice Cream",
    img: "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg",
    text: "Vanilla Ice Cream",
    price: 4.99,
  },
];

foods.forEach((food) => {
  row.innerHTML += `
<div>
    <div class="card">
    <img src="${food.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.foodType}</h5>
            <p class="card-text">${food.text}</p>
            <p class="card-text">${food.price}</p>
<p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Read more
  </a> 
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
        </div>
    </div>


</div>
    `;
});

let btnsMore = document.querySelectorAll(".btnMore");

btnsMore.forEach((btnMore) => {
  btnMore.addEventListener("click", () => {
    
  });
});
