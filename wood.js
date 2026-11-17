function woodQuantity(chairQuantity , bedQuantity , tableQuantity){
    const perchairQuantity = 3; 
    const perbedQuantity = 10;
    const pertableQuantity = 50;

    const chairTotalQuantity = chairQuantity * perbedQuantity;
    const tableTotalQuantity = tableQuantity * pertableQuantity;
    const bedTotalQuantity = bedQuantity * perchairQuantity;

    const totalQuntity = chairTotalQuantity + tableTotalQuantity + bedTotalQuantity;

    return totalQuntity

}

const totalWood = woodQuantity(1,1,4);
console.log(totalWood);