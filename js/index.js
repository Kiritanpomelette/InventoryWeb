document.addEventListener("DOMContentLoaded", function () {
    // データを非同期で取得する関数
    function getAllData() {
        // APIのURLに変更してください
        fetch('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // データの取得に成功したら表を生成する
                createTable(data);
            })
            .catch(error => {
                console.error('Fetching error:', error);
            });
    }

    // 表を生成する関数
    function createTable(allData) {
        allData.forEach(data => {
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

            // クラスの付与
            btnCntElement.className = "btn-cnt";

            detailElement.innerText = "詳細";
            editElement.innerText = "編集";
            // tdにデータを入れる
            nameElement.innerText = data.name;
            memoElement.innerText = data.memo;
            nowNumberElement.innerText = data.nownumber;
            dayNumberElement.innerText = data.daynumber;
            weekNumberElement.innerText = data.weeknumber;
            // ボタンをtdに入れる
            btnCntElement.appendChild(detailElement);
            btnCntElement.appendChild(editElement);
            // trの中にtdを入れる
            trElement.appendChild(nameElement);
            trElement.appendChild(memoElement);
            trElement.appendChild(nowNumberElement);
            trElement.appendChild(dayNumberElement);
            trElement.appendChild(weekNumberElement);
            trElement.appendChild(btnCntElement);
            // 画面遷移の処理
            detailElement.addEventListener('click', function () {
                window.location.href = 'detail.html?id=' + data.id;
            });
            editElement.addEventListener('click', function () {
                window.location.href = 'edit.html?id=' + data.id;
            });
            // htmlの表示する場所
            document.getElementById("Tablejs").appendChild(trElement);
        });
    }

    // データの取得と表の生成を開始する
    getAllData();
});
