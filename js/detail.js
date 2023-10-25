// クエリパラメータからIDの取得
function getQueryParam(id) {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(id);
}

document.addEventListener("DOMContentLoaded", function () {
// 取得してきたidのデータの取得
    const id = getQueryParam("id");
    const data = getData(id);
// データを表示していく
    document.getElementById("name").textContent = data.name + "詳細画面";
    document.getElementById("nownumber").textContent = "現在の個数：" + data.nownumber;
    document.getElementById("daynumber").textContent = "今日：" + data.daynumber;
    document.getElementById("weeknumber").textContent = "今週：" + data.weeknumber;
    document.getElementById("monthnumber").textContent = "今月：" + data.monthnumber;
    document.getElementById("memo").textContent = "メモ：" + data.memo;
});