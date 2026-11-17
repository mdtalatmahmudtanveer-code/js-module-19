const products = [
    {name : 'samsung',price : 200, camera : '12mp', color : 'black'},
    {name : 'xiomi',price : 180, camera : '12mp', color : 'black'},
    {name : 'oppo',price : 30, camera : '12mp', color : 'black'},
    {name : 'iphone',price : 10, camera : '12mp', color : 'black'},
]

function getShoping(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getShoping(products);
console.log(total);