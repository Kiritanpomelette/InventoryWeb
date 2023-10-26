class Treasurer {
    id;
    productId;
    treasurerNumber;
    managerId;

    constructor(id, productId, treasurerNumber, managerId) {
        this.id = id;
        this.productId = productId;
        this.treasurerNumber = treasurerNumber;
        this.managerId = managerId;
    }
}

var treasurerDummyData = [
    new Treasurer(1, 1, 14, 3),
    new Treasurer(2, 2, 543, 2),
    new Treasurer(3, 3, 75, 1),
    new Treasurer(4, 4, 4567, 5)
]

function getAllData(){
    return treasurerDummyData;
}