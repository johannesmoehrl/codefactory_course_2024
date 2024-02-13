let books = JSON.parse(booksJson);
console.log(books)

let container = document.getElementById("row");


books.forEach((element, i) => {

    container.innerHTML += `
    <div>
<div class="card m-2 card-container">
  <img class="card-img-top" src="${element.img}">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.author}</p>
    <a  class="btn btn-primary read-btn">Not read</a>
  </div>
</div>
</div>

`
    let bookContainer = document.querySelectorAll(".card-container")
    let btns = document.querySelectorAll(".read-btn");
    if (element.read) {
        bookContainer[i].style.backgroundColor = "green"
        btns[i].innerHTML = "Read"

    } else {
        bookContainer[i].style.backgroundColor = "red"

    }
});





let readBtn = document.querySelectorAll(".read-btn");
readBtn.forEach((e, i) => {

    let bookContainer = document.querySelectorAll(".card-container")
    let state = true;
    e.addEventListener('click', () => {

        if (state) {
            e.innerHTML = "Read"
            console.log("hello2313")
            bookContainer[i].style.backgroundColor = "green"
        } else {

            e.innerHTML = "Not Read"
            console.log("hello")

            bookContainer[i].style.backgroundColor = "red"
        }
        state = !state
    })
})