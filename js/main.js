document.addEventListener("DOMContentLoaded", function() {
    const indexButton = document.getElementById('toIndexButton');
    const productsButton = document.getElementById('toProductsButton');
    const productsdetailButton = document.getElementById('toProductsDetailButton');

    indexButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    productsButton.addEventListener('click', function() {
        window.location.href = 'Syohin.html';
    });

    productsdetailButton.addEventListener('click', function (){
        window.location.href = 'detail.html';
    });
});

// function navigateTo(url) {
//     window.location.href = "./index.html";
// }