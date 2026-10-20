// Select the paragraph and button using DOM selection methods
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Define the function to replace the paragraph text
function changeMessage() {
    message.textContent = "Hello there!";
}

// Attach the function to the button using addEventListener
changeBtn.addEventListener("click", changeMessage);