// Consts
const table = document.getElementById('star_table'); // Table of stars
const counterOn = document.getElementById('value-on'); // Counter display
const counterOff = document.getElementById('value-off'); // Counter display
const stars = document.getElementsByClassName('star'); // Stars
const starsOn = document.getElementsByClassName('star-on'); // Stars on
let initialSize = 5;

// Functions
/**
 * increases the number of time the star was set on
 * @param {HTMLElement} star : star element
 */
const incrementStarCountOn = star => {
    const countOn = parseInt(star.getAttribute('setOn'));
    star.setAttribute("setOn", countOn + 1);
}

const specialListener = () => {
    alert('This star was set on 5 times');
}

const setStarsListeners = () => {
    for (let star of stars) {
        star.addEventListener('mouseover', () => {
            star.classList.toggle('star-off'); // Toggling stars off
            star.classList.toggle('star-on'); // Toggling stars on
    
            // Changing display
            const hmStarsOn = starsOn.length; // Number of stars on
            const hmStars = stars.length;
            const percentageOn = (hmStarsOn / hmStars) * 100;
    
            refreshCount(hmStarsOn, hmStars - hmStarsOn);
            
            if (star.classList.contains('star-on')) incrementStarCountOn(star);

            if (parseInt(star.getAttribute("setOn")) >= 5) star.addEventListener('click', specialListener);
    
            // Increasing size of table when 70% of stars are on
            if (percentageOn >= 70) {
                initialSize++;
                initializeTable(initialSize);
                refreshCount(0, initialSize * initialSize);
            }
        });
    }
}

/**
 * Generating cells of the table
 * @param {*} size 
 */
const generateCells = size => {
    let cells = '';
    for (let x = 0; x < size; x++) cells += `<td><img setOn="0" class="star star-off" alt="star"></td>`;
    return cells;
}

/**
 * Creates a table of n rows and columns
 * @param {Integer} size : number of rows and columns of the table
 */
const initializeTable = size => {
    table.innerHTML = '';
    for (let y = 0; y < size; y++) {
        const cells = generateCells(size);
        table.innerHTML += `<tr>${cells}</tr>`;
    }
    setStarsListeners();
}

/**
 * Refreshes the count display
 * @param {Integer} starsOn : number of stars on
 * @param {Integer} starsOff : number of stars off
 */
const refreshCount = (starsOn, starsOff) => {
    counterOn.innerHTML = `${starsOn}`; // Displaying the number of stars on
    counterOff.innerHTML = `${starsOff}`; // Displaying the number of stars off
}

// Initialization
initializeTable(initialSize);
refreshCount(0, initialSize * initialSize);