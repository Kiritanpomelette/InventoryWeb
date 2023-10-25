document.addEventListener("DOMContentLoaded", function() {
    // webPC画面
    const indexButton = document.getElementById('toIndexButton');
    const productsButton = document.getElementById('toProductsButton');
    const productsdetailButton = document.getElementById('toProductsDetailButton');
    // webMB画面
    const hmindexButton = document.getElementById('hm-toIndexButton');
    const hmproductsButton = document.getElementById('hm-toProductsButton');

    // webPC画面遷移
    indexButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    productsButton.addEventListener('click', function() {
        window.location.href = 'Syohin.html';
    });

    // webMB画面遷移(ハンバーガーメニュー)
    hmindexButton.addEventListener('click', function (){
        window.location.href = 'index.html';
    });
    hmproductsButton.addEventListener('click', function() {
        window.location.href = 'syohin.html';
    });
});