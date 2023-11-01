class Treasurer {
    id;
    productId;
    treasurerNumber;
    managerId
    dateTime;

    constructor(id, productId, treasurerNumber, managerId, dateTime) {
        this.id = id;
        this.productId = productId;
        this.treasurerNumber = treasurerNumber;
        this.managerId = managerId;
        this.dateTime = dateTime;
    }
}

var treasurerDummyData = [
    new Treasurer(1, 1, 14, 3, new Date(2023, 0, 1)),
    new Treasurer(2, 2, 543, 2, new Date(2023, 4, 30)),
    new Treasurer(3, 3, 75, 1, new Date(2023, 2, 23)),
    new Treasurer(4, 4, 4567, 5, new Date(2023, 2, 17))
]

function getAllData(){
    return treasurerDummyData;
}