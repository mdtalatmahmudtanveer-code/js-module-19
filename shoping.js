const products = [
    {name : 'samsung',price : 200, camera : '12mp', color : 'black',quantity : 5},
    {name : 'xiomi',price : 180, camera : '12mp', color : 'black',quantity : 3},
    {name : 'oppo',price : 30, camera : '12mp', color : 'black',quantity : 2},
    {name : 'iphone',price : 10, camera : '12mp', color : 'black',quantity : 1},
]

function cartTotal(products){
    let total = 0;
    for(const  product of products){
        total  = total + product.price
    }
    return total
}
const shopingCost = cartTotal(products)
console.log(shopingCost)