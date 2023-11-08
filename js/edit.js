function getQueryParam(id) {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(id);
}

document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('form-use-number');
    const productIdInput =getQueryParam("id")
    const countInput = document.getElementById('use-number'); // 出納数の入力フィールドのID

    // 出納情報を取得する関数
    function fetchTreasurerData() {
        fetch('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/treasurer')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // TODO: 取得したデータをどのように処理するかここに書く
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // 出納情報を登録する関数
    function postTreasurerData(productId, managerId, count) {
        fetch('https://n3.miyayu.xyz/InventoryServer-0.0.1-SNAPSHOT-plain/treasurer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `productId=${productId}&managerId=${managerId}&count=${count}`
            }).then(response => {
                if (!response.ok) {
                    // エラーレスポンスをテキストで取得して詳細を表示
                    return response.text().then(text => { throw new Error(text) });
                }
            })
            .then(() => {
                // 更新後にindex.htmlにリダイレクト
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // フォーム送信時のイベントリスナー
    form.addEventListener('submit', function (event){
        event.preventDefault();
        const productId = productIdInput;
        const count = countInput.value;
        const managerId = '1'; // 仮のマネージャーID、実際のアプリケーションでは適切な値に置き換える
        postTreasurerData(productId, managerId, count);
    });
    // ページ読み込み時に出納情報を取得する
    fetchTreasurerData();
});
