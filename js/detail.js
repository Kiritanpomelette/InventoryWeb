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
                document.getElementById("memo").textContent = "メモ：" + data.memo;
            })
            .catch(error => {
                console.error('Fetching error:', error);
            });
        function readAndWriteCount(url, element,prefix) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    element.innerText = prefix + data.total;
                })
                .catch(error => {
                    console.error('Fetching error:', error);
                });
        }
        const nowNumberElement = document.getElementById("nownumber")
        const dayNumberElement = document.getElementById("daynumber");
        const weekNumberElement = document.getElementById("weeknumber");
        const monthNumberElement = document.getElementById("monthnumber");
        readAndWriteCount('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/treasurer/allStatistics?productId=' + id, nowNumberElement,"現在:");
        readAndWriteCount('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/treasurer/dailyStatistics?productId=' + id, dayNumberElement,"今日:");
        readAndWriteCount('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/treasurer/weeklyStatistics?productId=' + id, weekNumberElement,"今週:");
        readAndWriteCount('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/treasurer/monthlyStatistics?productId=' + id, monthNumberElement,"今月:");
    }
    // 取得してきたidのデータの取得
    const id = getQueryParam("id");
    // データを表示していく
    getAllData()

});