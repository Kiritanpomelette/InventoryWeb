class Inventory {
    id;
    name;
    memo;
    nownumber;
    daynumber;
    weeknumber;

    constructor(id, name,memo,nownumber, daynumber, weeknumber, monthnumber) {
        this.id = id;
        this.name = name;
        this.memo = memo;
        this.nownumber = nownumber;
        this.daynumber = daynumber;
        this.weeknumber = weeknumber;
        this.monthnumber = monthnumber;
    }
}

var dummyData = [
    new Inventory(1, "りんご", "信州産", 10, 100, 355, 2345),
    new Inventory(2, "ごりら", "工学院産",238, 1000,2000, 3453),
    new Inventory(3,"みかん", "三ケ日産",357, 100,150, 2436),
    new Inventory(4, "メロン","東京都産", 345, 234, 23435, 254635)
]

function getAllData(){
    return dummyData
}

function getData(id){
    return dummyData[id-1]
}