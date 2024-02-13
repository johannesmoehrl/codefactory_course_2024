let people = [
    {
        name: "Test",
        likes: 1,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg"
    },
    {
        name: "Test2",
        likes: 3,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg"
    },
    {
        name: "Test3",
        likes: 9,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg"
    },
    {
        name: "Test4",
        likes: 5,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg"
    },
    {
        name: "Test5",
        likes: 0,
        img: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg"
    },
]

for (let val of people) {
    document.getElementById("result").innerHTML += `
    <div class="my-2" style="border: 1px solid black;">
        <img src="${val.img}" width="100%">
        <p>${val.name}</p>
        <p class="para">${val.likes}</p>
        <button class="btn btn-danger btns">Likes</button>
    </div> 
    `
}

let btns = document.querySelectorAll(".btns");

btns.forEach((element, i) => {
    element.addEventListener("click", () => {
        if (people[i].likes < 10) {
            people[i].likes++;
            document.querySelectorAll(".para")[i].innerHTML = people[i].likes

        }
    })
});

//from biggest to smallest
function sortByLikes() {
    let sortedArray = people.sort((a, b) => b.likes - a.likes);
}