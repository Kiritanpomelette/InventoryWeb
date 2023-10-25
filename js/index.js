document.addEventListener("DOMContentLoaded", function () {
    //データを読み込む処理
    // データの取得
    const allData = getAllData();
    for (let i = 0; i < allData.length; i++) {
        //すべてのデータをiに格納
        const data = allData[i];
        // HTMLの作成
        const element = document.createElement("tr");
        const elament2 = document.createElement("td");
        const elament3 = document.createElement("td");
        const elament4 = document.createElement("td");
        const elament5 = document.createElement("td");
        const elament6 = document.createElement("td");
        const elament7td = document.createElement("td");
        const elament7a = document.createElement("button");
        const elament7b = document.createElement("button");

        elament7a.innerText = "詳細";
        elament7b.innerText = "編集";
        // tdにnameのデータを入れる
        elament2.innerText = data.name;
        elament3.innerText = data.memo;
        elament4.innerText = data.nownumber;
        elament5.innerText = data.daynumber;
        elament6.innerText = data.weeknumber;
        // ボタンをtdに入れる
        elament7td.append(elament7a);
        elament7td.append(elament7b);
        // trの中にtdを入れる
        element.append(elament2);
        element.append(elament3);
        element.append(elament4);
        element.append(elament5);
        element.append(elament6);
        element.append(elament7td);
        // 画面遷移の処理
        elament7a.addEventListener('click', function (){
           window.location.href = 'detail.html';
        });
        //htmlの表示する場所
        document.getElementById("test").append(element)
    }
});