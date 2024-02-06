let images = document.querySelectorAll('img');
let container = document.getElementById('container')

let state = false;
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        if (state) {
            images[i].src = "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878"
            state = false
        } else {
            images[i].src = "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png"
            state = true
        }
        container.style.backgroundColor = changeBg()
    })
}

// images.forEach(element => {
//     element.addEventListener('click', function () {
//         element.style.display = "none";
//          this.style.color = "green";
//     })
// });

function changeBg() {

    // function RGBcolor() {
    //     var R = Math.floor(Math.random() * 256);
    //     var G = Math.floor(Math.random() * 256);
    //     var B = Math.floor(Math.random() * 256);
    //     var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
    //     console.log(randomcolor);
    // }

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rgbValue = "#" + randomColor;
    return rgbValue
}