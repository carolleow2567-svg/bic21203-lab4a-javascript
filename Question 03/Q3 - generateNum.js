// Select the button and the list container
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
    // Clear existing items before generating to prevent duplicates
    numberList.textContent = ""; 

    // Use a for loop that iterates from 1 through 5
    for (let i = 1; i <= 5; i++) {
        // Create each <li> with document.createElement()
        const listItem = document.createElement("li");
        
        // Set its text with textContent
        listItem.textContent = `The number is ${i}`;
        
        // Append it to #numberList
        numberList.appendChild(listItem);
    }
}

// Attach function to the button
generateBtn.addEventListener("click", generateNumbers);