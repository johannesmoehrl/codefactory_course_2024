

let displayBtn = document.getElementById('displayBtn')

const firstNameDisplay = document.getElementById('firstNameDisplay')
const lastNameDisplay = document.getElementById('lastNameDisplay')


displayBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let firstNameValue = document.getElementById('firstName').value;
    let lastNameValue = document.getElementById('lastName').value;
    firstNameDisplay.innerHTML = `${firstNameValue}`
    lastNameDisplay.innerHTML = `${lastNameValue}`

    if (firstNameValue.length > 5) {
        firstNameDisplay.style.color = "green"
    } else {
        firstNameDisplay.style.color = "red"
    }

    if (lastNameValue.length > 5) {
        lastNameDisplay.style.color = "green"
    } else {
        lastNameDisplay.style.color = "red"
    }

    let select = document.querySelector('select');
    let selectValue = select.value;

    const displayDiv = document.getElementById("display")

    if (selectValue == "it") {
        displayDiv.style.backgroundColor = "purple"
    } else {
        displayDiv.style.backgroundColor = "yellow"
    }


})