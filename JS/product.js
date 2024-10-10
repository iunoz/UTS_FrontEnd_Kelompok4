const sizeButtons = document.querySelectorAll('.size-btn');
const selectedSizeDisplay = document.getElementById('selectedSize'); 

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');
        
        const selectedSize = button.textContent;
        console.log("Ukuran yang dipilih:", selectedSize);
        
        selectedSizeDisplay.textContent = selectedSize; 
    });
});
