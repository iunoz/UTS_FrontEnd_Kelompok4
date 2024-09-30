
const sizeButtons = document.querySelectorAll('.size-btn');

// Menambahkan event listener untuk setiap tombol
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus class 'active' dari semua tombol
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        
        // Tambahkan class 'active' ke tombol yang diklik
        button.classList.add('active');
        
        // Misal, simpan ukuran yang dipilih ke dalam variabel
        const selectedSize = button.textContent;
        console.log("Ukuran yang dipilih:", selectedSize);
    });
});

document.querySelector('.add-to-cart').addEventListener('click', () => {
    window.location.href = 'shop.html'; // Arahkan ke shop.html
});