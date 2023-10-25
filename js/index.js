document.addEventListener("DOMContentLoaded", function () {
    //データを読み込む処理
    // データの取得
    const allData = getAllData();
    for (let i = 0; i < allData.length; i++) {
        //すべてのデータをiに格納
        const data = allData[i];
        // HTMLの作成
        const trelement = document.createElement("tr");
        const nameelament = document.createElement("td");
        const memoelament = document.createElement("td");
        const nownumberelament = document.createElement("td");
        const daynumberelament = document.createElement("td");
        const weeknumberelament = document.createElement("td");
        const btncntelament = document.createElement("td");
        const detailelament = document.createElement("button");
        const editelament = document.createElement("button");

        detailelament.innerText = "詳細";
        editelament.innerText = "編集";
        // tdにnameのデータを入れる
        nameelament.innerText = data.name;
        memoelament.innerText = data.memo;
        nownumberelament.innerText = data.nownumber;
        daynumberelament.innerText = data.daynumber;
        weeknumberelament.innerText = data.weeknumber;
        // ボタンをtdに入れる
        btncntelament.append(detailelament);
        btncntelament.append(editelament);
        // trの中にtdを入れる
        trelement.append(nameelament);
        trelement.append(memoelament);
        trelement.append(nownumberelament);
        trelement.append(daynumberelament);
        trelement.append(weeknumberelament);
        trelement.append(btncntelament);
        // 画面遷移の処理
        detailelament.addEventListener('click', function (){
           window.location.href = 'detail.html?id=' + data.id;
        });
        //htmlの表示する場所
        document.getElementById("Tablejs").append(trelement)
    }
});