document.addEventListener("DOMContentLoaded", function() {
    const productsdetailButton = document.getElementById('toProductsDetailButton');

    productsdetailButton.addEventListener('click', function (){
        window.location.href = 'detail.html';
    });
});