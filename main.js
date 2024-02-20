// get display elements by ID
const display = document.getElementById("display");

// update display with input value
function setDisplay(input) {
    display.value += input;

}

// function to clear display
function clearDisplay() {
    display.value = ""; // clear display
    display.style.color = "white"; // reset color
    display.style.fontSize = "5rem"; // reset font size
}

// function to perform the calc based on display value
function performCalculation() {

    try {
        // evaluation expression and update display with result
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Invalid Format";
        display.style.color = "red";
        display.style.fontSize = "4rem";
       
    }
}