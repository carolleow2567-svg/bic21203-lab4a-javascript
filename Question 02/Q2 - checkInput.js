//Select the input field, button, and result paragraph
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
    // Read the input and handle whitespace
    const rawValue = userInput.value.trim();

    // Check for empty or whitespace-only values
    if (rawValue === "") {
        result.textContent = "Please enter a valid number!";
        return;
    }

    // Convert string to a number
    const numericValue = Number(rawValue);

    // Detect invalid values (NaN) and display correct messages
    if (isNaN(numericValue)) {
        result.textContent = "Please enter a valid number!";
    } else if (numericValue < 10) {
        result.textContent = "The number is lower than 10";
    } else if (numericValue > 10) {
        result.textContent = "The number is higher than 10";
    } else {
        result.textContent = "The number is equal to 10";
    }
}

// Attach funtion to the button
checkBtn.addEventListener("click", checkInput);