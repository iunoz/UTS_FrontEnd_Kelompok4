const itemsPerPage = 16; // jumlah item produk per halaman
const productItems = document.querySelectorAll('.product-item');
const pagination = document.getElementById('pagination');
const totalPages = Math.ceil(productItems.length / itemsPerPage);
let currentPage = 1;

// Fungsi untuk menampilkan produk berdasarkan halaman yang dipilih
function showPage(page) {
    // hide semua item produk dahulu
    productItems.forEach(item => item.style.display = 'none');

    // Menghitung indeks awal dan akhir item produk yang akan ditampilkan
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = start; i < end && i < productItems.length; i++) {
        productItems[i].style.display = 'block'; // Menampilkan produk
    }

    // Memperbarui tampilan pagination
    updatePagination(page);

    // Menggulung halaman ke atas dengan efek halus
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fungsi untuk memperbarui tampilan pagination
function updatePagination(page) {
    // Mengosongkan konten pagination sebelumnya
    pagination.innerHTML = '';
    // Membuat tautan untuk setiap halaman
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a'); // Membuat elemen tautan
        pageLink.textContent = i; // Mengatur teks tautan sesuai nomor halaman
        pageLink.classList.add('page-link'); // Menambahkan kelas untuk styling

        // Menandai tautan sebagai aktif jika itu adalah halaman saat ini
        if (i === page) {
            pageLink.classList.add('active');
        }

        // Menambahkan event listener untuk mengubah halaman saat tautan diklik
        pageLink.addEventListener('click', () => {
            currentPage = i; // Memperbarui halaman saat ini
            showPage(i); // Menampilkan produk di halaman yang dipilih
            // update title shop.html
            document.getElementById('product-title').textContent = `Our Products - [${i}]`;
        });

        pagination.appendChild(pageLink);
    }
}

// Menampilkan produk pada halaman pertama saat halaman dimuat
showPage(currentPage);
