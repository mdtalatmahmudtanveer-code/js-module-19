const prices = [12000,20000,100000,30000,54000,53000,70000];
function getMin(number){
    let min = number[0]
    for(const num of number){
        if(num<min){
            min = num
        }
    }
    return min
}
const device = getMin(prices);
console.log(device);