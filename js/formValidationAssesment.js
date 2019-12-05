// Global variables
const submitButton = document.getElementById("btn1"); // Submit button
const clearButton = document.getElementById("btn2"); // Clear button
const fields = document.getElementsByClassName("field"); // All fields
const messageContainer = document.getElementById("validation-result"); // Message container

// Fields
const firstname = document.getElementById("A_nam1"); // Firstname field
const lastname = document.getElementById("A_lnam1"); // Lastname field
const password = document.getElementById("A_pass1"); // Password field
const age = document.getElementById("A_age1"); // Age field
const email = document.getElementById("A_mail1"); // Email field
const notes = document.getElementById("A_tmpTxt1"); // Notes field

// Functions

const checkName = name => /^[a-zA-Z ]+$/.test(name); // Check if the names match the format
const checkPassword = password => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,10}$/.test(password); // Checks if the given password match the format
const checkAge = age => /^[0-9]{2,3}$/.test(age) && age > 20; // Checks if the age value is valid
const checkEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); // Checks if the email matches the format

/**
 * 
 * @param {*} valid 
 * @param {*} message 
 */
const handleCheck = (valid, message) => {
    if (!valid) addMessage(message);
}

/**
 * Appends a message to the validation message container
 * @param {String} message : message to append
 * @return {void}
 */
const addMessage = message => {
    messageContainer.innerHTML += `<p class="validation-message">${message}</p>`;
}

/**
 * Validate the fields
 * @param {HTMLCollection} fields : fields to validate
 * @return {boolean} : whether or not the fields are valid
 */
const validateFields = fields => {
    const res = [];
    for (let field of fields) {
        const fieldValue = field.value; // Value of the field
        const required = field.hasAttribute("required"); // Check if field is required
        const type = field.getAttribute("type"); // Get the type of the field

        let isValid = true;

        if (required) {
            // Handle the cases
            switch (type) {
                case "password":
                    isValid = checkPassword(fieldValue);
                    handleCheck(isValid, `Error: invalid password ${fieldValue}!`);
                    break;

                case "number":
                    isValid = checkAge(fieldValue);
                    handleCheck(isValid, `Error: invalid age format ${fieldValue}!`);
                    break;

                case "email":
                    isValid = checkEmail(fieldValue);
                    handleCheck(isValid, `Error: invalid email address ${fieldValue}!`);
                    break;
            
                default:
                    isValid = checkName(fieldValue);
                    handleCheck(isValid, `Error: invalid string ${fieldValue}!`);
                    break;
            }
        }
        
        res.push(isValid);
    }

    const finalCheck = res.every(valid => valid === true);
    console.log(res, finalCheck);

    if (finalCheck) addMessage("Success: All the fields are valid"); // Check if there is no error at the end
    return finalCheck;
}

// Listeners
// Submit button listener
submitButton.addEventListener("click", () => {
    messageContainer.innerHTML = "";
    validateFields(fields); // Launch the verification process
});

// Clear button listener
clearButton.addEventListener("click", () => {
    for (let field of fields) {
        field.value = "";
    }
});
