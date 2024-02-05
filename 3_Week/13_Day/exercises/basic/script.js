let arr = [1, 7, -3, 9];
function findHighest(arr) {
    let max = arr[0];
    for (let val of arr) {
        if (val > max) {
            max = val;
        }
    }
    return max;
}
console.log(findHighest(arr));


let temp = Math.round(Math.random() * 40 - 5);
let tempText = document.getElementById("temp-text");
let weatherImg = document.getElementById("weather-img");
if (temp <= 10) {
    tempText.innerHTML = "The weather is cold";
    weatherImg.src = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s="
    weatherImg.src = "./"
} else if (temp > 10 && temp < 30) {
    tempText.innerHTML = "The weather is moderate"
    weatherImg.src = "https://www.shutterstock.com/image-photo/mild-seven-hills-group-pine-260nw-1692849502.jpg"
} else {
    tempText.innerHTML = "The weather is hot"
    weatherImg.src = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk="
}

