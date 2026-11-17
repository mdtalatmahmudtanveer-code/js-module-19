const gadget = [
    {name : 'samsung',price : 200, camera : '12mp', color : 'black'},
    {name : 'xiomi',price : 180, camera : '12mp', color : 'black'},
    {name : 'oppo',price : 30, camera : '12mp', color : 'black'},
    {name : 'iphone',price : 10, camera : '12mp', color : 'black'},
    {name : 'walton',price : 310, camera : '12mp', color : 'black'},
    {name : 'vivo',price : 270, camera : '12mp', color : 'black'},
]

function getCheapestPhone(gadget){
    let min = gadget[0]
    for(const device of gadget){
        if(device.price > min.price){
            min = device
        }
    }
    return min
}
const cheap = getCheapestPhone(gadget)
console.log(cheap)