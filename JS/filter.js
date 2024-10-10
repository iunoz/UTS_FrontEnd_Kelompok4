document.addEventListener("DOMContentLoaded", function() {
    const categoryFilter = document.getElementById("category-filter");
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const filterButton = document.getElementById("filter-btn");
    const productItems = document.querySelectorAll(".product-item");
    const noProductsMessage = document.querySelector(".no-products");

    // Function to filter products
    filterButton.addEventListener("click", function() {
        const selectedCategory = categoryFilter.value;
        const minPrice = parseInt(minPriceInput.value) || 0; // Default to 0 if empty
        const maxPrice = parseInt(maxPriceInput.value) || Infinity; // Default to Infinity if empty
        let productsFound = false; // Track if any products are found

        productItems.forEach(function(product) {
            const productCategory = product.getAttribute("data-category");
            const productPrice = parseInt(product.getAttribute("data-price"));

            // Check if the product matches the selected category and price range
            const matchesCategory = selectedCategory === "all" || productCategory === selectedCategory;
            const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;

            // Show or hide the product based on the filter criteria
            if (matchesCategory && matchesPrice) {
                product.style.display = "block";
                productsFound = true; // Found at least one product
            } else {
                product.style.display = "none";
            }
        });

        // Show or hide the "No products found" message
        noProductsMessage.style.display = productsFound ? "none" : "block";
    });
});
