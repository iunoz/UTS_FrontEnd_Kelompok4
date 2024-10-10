let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

let index = 0;
const items = document.querySelectorAll('.carousel-item');

function showCarouselItems(direction = 'next') {
    items.forEach((item, i) => {
        item.classList.remove('active', 'prev', 'next');
        item.style.opacity = 0;
    });

    const currentItem = items[index]; 

    if (direction === 'next') {
        currentItem.classList.add('prev');  // Item sekarang keluar ke kiri
        index = (index + 1) % items.length;  // Pindah ke item berikutnya
    } else {
        currentItem.classList.add('next');  // Item sekarang keluar ke kanan
        index = (index - 1 + items.length) % items.length;  // Pindah ke item sebelumnya
    }

    const nextItem = items[index];
    nextItem.classList.add('active');  // Item baru ditampilkan
    nextItem.style.opacity = 1;
}

// Tombol untuk berpindah ke gambar sebelumnya atau berikutnya
document.querySelector('.next').addEventListener('click', function() {
    showCarouselItems('next');
});

document.querySelector('.prev').addEventListener('click', function() {
    showCarouselItems('prev');
});

// Set interval untuk otomatis bergeser ke item berikutnya setiap 4 detik
setInterval(() => showCarouselItems('next'), 4000);

// Inisialisasi pertama kali
showCarouselItems();