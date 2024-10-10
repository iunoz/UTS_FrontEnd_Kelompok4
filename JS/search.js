$(document).ready(function() {
    $("#search").on("keyup", function() { //ketrigger setiap mengetik di input pencarian (keyup)
        var value = $(this).val().toLowerCase(); //ambil nilai input dan ubah menjadi lowercase
        //filter produk berdasarkan input pencarian
        $(".product-item").filter(function() {
            //menampilkan produk jika namanya mengandung pada teks pencarian sbelumnya
            $(this).toggle($(this).find("h3").text().toLowerCase().indexOf(value) > -1);
        });
    });
}); 