document.addEventListener("DOMContentLoaded", function () {
    //データを読み込む処理
    // データの取得
    const allData = getAllData();
    for (let i = 0; i < allData.length; i++) {
        //すべてのデータをiに格納
        const data = allData[i];
        // HTMLの作成
        const trElement = document.createElement("tr");
        const nameElement = document.createElement("td");
        const memoElement = document.createElement("td");
        const nownumberElement = document.createElement("td");
        const daynumberElement = document.createElement("td");
        const weeknumberElement = document.createElement("td");
        const btncntElement = document.createElement("td");
        const detailElement = document.createElement("button");
        const editElement = document.createElement("button");

        detailElement.innerText = "詳細";
        editElement.innerText = "編集";
        // tdにnameのデータを入れる
        nameElement.innerText = data.name;
        memoElement.innerText = data.memo;
        nownumberElement.innerText = data.nownumber;
        daynumberElement.innerText = data.daynumber;
        weeknumberElement.innerText = data.weeknumber;
        // ボタンをtdに入れる
        btncntElement.append(detailElement);
        btncntElement.append(editElement);
        // trの中にtdを入れる
        trElement.append(nameElement);
        trElement.append(memoElement);
        trElement.append(nownumberElement);
        trElement.append(daynumberElement);
        trElement.append(weeknumberElement);
        trElement.append(btncntElement);
        // 画面遷移の処理
        detailElement.addEventListener('click', function (){
           window.location.href = 'detail.html?id=' + data.id;
        });
        //htmlの表示する場所
        document.getElementById("Tablejs").append(trElement)
    }
});