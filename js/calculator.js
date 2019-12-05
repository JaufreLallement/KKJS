// Global variables
const calculatorInput = document.getElementById("calculator-input"); // Display for the calculator
const buttonGroup = document.getElementById("calculator-buttons"); // Buttons for the calculator
const lastPressed = { value: "", buttonType: "" };

const buttons = [
    { id:"zero", name: "0", buttonType: "number" },
    { id:"one", name: "1", buttonType: "number" },
    { id:"two", name: "2", buttonType: "number" },
    { id:"three", name: "3", buttonType: "number" },
    { id:"four", name: "4", buttonType: "number" },
    { id:"five", name: "5", buttonType: "number" },
    { id:"six", name: "6", buttonType: "number" },
    { id:"seven", name: "7", buttonType: "number" },
    { id:"eight", name: "8", buttonType: "number" },
    { id:"nine", name: "9", buttonType: "number" },
    { id:"plus", name: "+", buttonType: "operator" },
    { id:"minus", name: "-", buttonType: "operator" },
    { id:"mult", name: "*", buttonType: "operator" },
    { id:"divide", name: "/", buttonType: "operator" },
    { id:"rest", name: "%", buttonType: "operator" },
    { id:"eq", name: "=", buttonType: "operator" },
    { id:"clear", name: "Ø", buttonType: "operator" },
]; // Buttons for the calculator

// Append buttons to button group
buttons.forEach(({ id, name, buttonType }) => {
    buttonGroup.innerHTML += `<button id='${id}-calculator-button' class='event-button calculator-button' buttonType='${buttonType}'>${name}</button>`;
});

// Functions

/**
 * Set the last pressed button
 * @param {HTMLElement} element : pressed DOM button
 * @return {Object} lastPressed
 */
const setLastPressed = (element) => {
    const buttonType = element.getAttribute("buttonType");
    lastPressed["buttonType"] = buttonType;
    lastPressed["value"] = element.textContent;
}


// Listeners
const calculatorButtons = buttonGroup.getElementsByClassName("calculator-button"); // DOM Buttons of the calculator

// Add onClick listeners to the buttons
for (let button of calculatorButtons) {
    button.addEventListener("click", () => {
        const buttonType = button.getAttribute("buttonType");

        // Handle the different cases
        if ((button.id !== "eq-calculator-button") && (button.id !== "clear-calculator-button")) {
            const { buttonType: lastPressedType } = lastPressed;
            
            if (lastPressedType === "operator" && buttonType === "operator") return; // Prevent multiple operator

            calculatorInput.value += button.textContent;
        } else if (button.id === "eq-calculator-button") {
            calculatorInput.value = eval(calculatorInput.value); // Eval given string
        } else {
            calculatorInput.value = "";
        }

        setLastPressed(button); // Set the last pressed button
    });
}