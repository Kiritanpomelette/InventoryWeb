// クエリパラメータからIDの取得
function getQueryParam(id) {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(id);
}
document.addEventListener("DOMContentLoaded", function () {
    function getAllData() {
        const id = getQueryParam('id');
        fetch('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/products/selectID?id=' + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // データの取得に成功したら表を生成する
                document.getElementById("name").textContent = data.name + "詳細画面";
                document.getElementById("nownumber").textContent = "現在の個数：" + data.nownumber;
                document.getElementById("daynumber").textContent = "今日：" + data.daynumber;
                document.getElementById("weeknumber").textContent = "今週：" + data.weeknumber;
                document.getElementById("monthnumber").textContent = "今月：" + data.monthnumber;
                document.getElementById("memo").textContent = "メモ：" + data.memo;            })
            .catch(error => {
                console.error('Fetching error:', error);
            });
    }
// 取得してきたidのデータの取得
    const id = getQueryParam("id");
// データを表示していく
    getAllData()

});