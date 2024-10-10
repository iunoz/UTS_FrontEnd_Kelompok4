document.addEventListener("DOMContentLoaded", function() {

    // mengambil elemen dari shop.html
    const categoryFilter = document.getElementById("category-filter"); 
    const minPriceInput = document.getElementById("min-price"); 
    const maxPriceInput = document.getElementById("max-price"); 
    const filterButton = document.getElementById("filter-btn"); 
    const productItems = document.querySelectorAll(".product-item"); 
    const noProductsMessage = document.querySelector(".no-products"); 

    // Menambahkan event listener pada tombol filter
    filterButton.addEventListener("click", function() {
        const selectedCategory = categoryFilter.value; // kategori yang dipilih
        const minPrice = parseInt(minPriceInput.value) || 0; // harga minimum (default 0)
        const maxPrice = parseInt(maxPriceInput.value) || Infinity; // harga maksimum (default Infinity)
        let productsFound = false; 

        // Memeriksa setiap produk untuk kategori dan harga
        productItems.forEach(function(product) {
            const productCategory = product.getAttribute("data-category"); 
            const productPrice = parseInt(product.getAttribute("data-price")); 

            // Memeriksa apakah produk sesuai dengan kategori dan rentang harga yang dipilih di filter
            const matchesCategory = selectedCategory === "all" || productCategory === selectedCategory;
            const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;

            // Menampilkan produk jika sesuai dengan kategori dan harga
            if (matchesCategory && matchesPrice) {
                product.style.display = "block"; 
                productsFound = true; 
            } else { // menyembunyikan produk jika tidak sesuai
                product.style.display = "none"; 
            }
        });

        // Menampilkan atau menyembunyikan pesan jika tidak ada produk ditemukan
        noProductsMessage.style.display = productsFound ? "none" : "block";
    });
});
