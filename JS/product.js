const sizeButtons = document.querySelectorAll('.size-btn');
const selectedSizeDisplay = document.getElementById('selectedSize'); // Select the span element

// Add event listener for each button
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');
        
        // Get the selected size from the button's text
        const selectedSize = button.textContent;
        console.log("Ukuran yang dipilih:", selectedSize);
        
        // Update the span to show the selected size
        selectedSizeDisplay.textContent = selectedSize; // Update the display
    });
});
