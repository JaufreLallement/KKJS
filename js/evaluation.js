// Global variables
const content = document.getElementById('content'); // Root container DOM Element
const jsBasics = document.getElementById('js-basics'); // JSB container DOM Element

/**
 * Allows to append content to the JS basics section
 * @param {*} content
 * @return void
 */
const appendContent = (element, content) => {
    element.innerHTML += content;
}

/**
 * Append <p>
 * @return void
 */
const appendTest = () => appendContent(document.getElementById('append-test-container'), "<p class='appended-text'>Appended Element</p>")

/**
 * Change bg color of the target
 * @param {Event} e
 * @return void
 */
const changeBGColor = e => {
    if (e.target.classList.contains("red-bg")) e.target.classList.replace('red-bg', 'blue-bg');
    else e.target.classList.replace('blue-bg', 'red-bg');
}

/**
 * Change text inside tags
 * @param {Event} e catched event
 * @param {String} text text to set
 * @return void
 */
const changeElemText = (e, text) => {
    e.target.innerHTML = text;
}

/**
 * Displays pressed key
 * @param {Event} e catched event
 * @return void
 */
const getPressedKey = e => {
    document.getElementById('keyPress-display').innerHTML = e.which;
}


/* LISTENERS */
const appendTestButton = document.getElementById('append-test-button') // Appending button
const bgTest = document.getElementById('change-bg-test'); // Div with changing bg color
const changeText = document.getElementById('change-text-test'); // Text changing <p>
const kpInput = document.getElementById('keyPress-input'); // Key press listener input

appendTestButton.addEventListener("click", () => appendTest()); // Append on CLICK
bgTest.addEventListener("mouseover", e => changeBGColor(e)); // Change color on MOUSEOVER
changeText.addEventListener("mouseenter", e => changeElemText(e, "Entered")); // Text change on MOUSEENTER
changeText.addEventListener("mouseleave", e => changeElemText(e, "Left")); // Text change on MOUSELEAVE
kpInput.addEventListener("keypress", e => getPressedKey(e)); // Display pressed key on KEYPRESS