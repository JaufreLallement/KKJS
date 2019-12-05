// Consts
const valNameButtons = document.getElementsByClassName("dom-ex-button"); // Buttons
const changeableInputs = document.getElementsByClassName("dom-exchange-input"); // Changeable inputs
const inputsContainer = document.getElementById("dom-append-inputs"); // Container for the input appending
const addInput = document.getElementById("dom-add-input"); // Button to append input to the dom
const delInput = document.getElementById("dom-del-input"); // Button to delete the first input of the list

// Functions

// Listeners
// Add listener for each buttons to retreive their name and value when clicked
for (let button of valNameButtons) {
    button.addEventListener("click", () => {
        const buttonName = button.getAttribute("name");
        const buttonValue = button.textContent;
        alert(`Button name: ${buttonName} \nButton value: ${buttonValue}`);
    });
}

// Add listener for each changeable input
for (let changeInput of changeableInputs) {
    changeInput.addEventListener("focus", () => {
        const inputType = changeInput.getAttribute("type");
        if (inputType === "button") {
            changeInput.setAttribute("type", "text");
            changeInput.setAttribute("value", "text");
        } else {
            changeInput.setAttribute("type", "button");
            changeInput.setAttribute("value", "button");
        }
    });
}

// Add listener to add input button
addInput.addEventListener("click", () => {
    const dynamicIndex = inputsContainer.childNodes.length;
    inputsContainer.innerHTML += `<input type="text" value="${dynamicIndex}" class="input-test dom-ex-input dom-appended-input">`;
});

// Add listener to delete input button
delInput.addEventListener("click", () => {
    inputsContainer.removeChild(inputsContainer.childNodes[0]);
});