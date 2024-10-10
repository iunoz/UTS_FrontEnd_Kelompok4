// JavaScript for pagination
const itemsPerPage = 16;
const productItems = document.querySelectorAll('.product-item');
const pagination = document.getElementById('pagination');
const totalPages = Math.ceil(productItems.length / itemsPerPage);
let currentPage = 1;

function showPage(page) {
    productItems.forEach(item => item.style.display = 'none');

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = start; i < end && i < productItems.length; i++) {
        productItems[i].style.display = 'block';
    }

    updatePagination(page);

    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // This enables smooth scrolling
    });
}

function updatePagination(page) {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.textContent = i;
        pageLink.classList.add('page-link');
        if (i === page) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', () => {
            currentPage = i;
            showPage(i);
            // Update the title
            document.getElementById('product-title').textContent = `Our Products - [${i}]`;
        });
        pagination.appendChild(pageLink);
    }
}

// Initial display of products
showPage(currentPage);
