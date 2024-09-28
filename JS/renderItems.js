// Fungsi mencari data produk di dalam file json dan merender nya 
function loadProductData() {
    return fetch('../Assets/products.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Error loading product data:', error);
            return [];
        });
}

const itemsPerPage = 16; // jumlah item dalam satu halaman
let currentPage = 1; // halaman saat ini
let products = []; // array produk yang akan di render

// fungsi merender produk yang sudah diambil dari products.json
function renderProducts(products, page = 1) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // menghapus produk yang telah dirender agar tidak terjadi duplikasi

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const currentProducts = products.slice(start, end);

    currentProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <picture>
                <source srcset="${product.image}" type="image/avif">
                <source srcset="${product.image}" type="image/webp">
                <img src="${product.image}" alt="${product.name}">
            </picture>
            <hr>
            <h3><a href="${product.url}" class="product-link">${product.name}</a></h3>
            <p><strong>${product.price}</strong></p>
        `;

        productList.appendChild(productDiv);
    });

    updatePaginationControls();
}

// fungsi paginasi halaman shop
function updatePaginationControls() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const pageNumber = document.getElementById('pageNumber');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;
}

// event listener utk tombol prev dan next page
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts(products, currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts(products, currentPage);
    }
});

// fungsi untuk merender produk setelah halaman selesai di load
window.onload = function() {
    console.log("Loading product data and rendering...");
    loadProductData().then(loadedProducts => {
        products = loadedProducts; // variabel products diisi dengan data produk yang sudah diambil
        renderProducts(products, currentPage); // merender produk dalam halaman saat ini
    });
};
