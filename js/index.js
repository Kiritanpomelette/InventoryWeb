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
        const nowNumberElement = document.createElement("td");
        const dayNumberElement = document.createElement("td");
        const weekNumberElement = document.createElement("td");
        const btnCntElement = document.createElement("td");
        const detailElement = document.createElement("button");
        const editElement = document.createElement("button");

        detailElement.innerText = "詳細";
        editElement.innerText = "編集";
        // tdにnameのデータを入れる
        nameElement.innerText = data.name;
        memoElement.innerText = data.memo;
        nowNumberElement.innerText = data.nownumber;
        dayNumberElement.innerText = data.daynumber;
        weekNumberElement.innerText = data.weeknumber;
        // ボタンをtdに入れる
        btnCntElement.append(detailElement);
        btnCntElement.append(editElement);
        // trの中にtdを入れる
        trElement.append(nameElement);
        trElement.append(memoElement);
        trElement.append(nowNumberElement);
        trElement.append(dayNumberElement);
        trElement.append(weekNumberElement);
        trElement.append(btnCntElement);
        // 画面遷移の処理
        // 詳細画面への遷移
        detailElement.addEventListener('click', function (){
           window.location.href = 'detail.html?id=' + data.id;
        });
        // 編集画面への遷移
        editElement.addEventListener('click', function (){
            window.location.href = 'edit.html?id=' + data.id;
        });
        //htmlの表示する場所
        document.getElementById("Tablejs").append(trElement)
    }
});