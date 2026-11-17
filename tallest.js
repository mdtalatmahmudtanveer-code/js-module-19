// Find The biggest Number In An Array-----

const heights = [56,65,67,77,76,80]
function top(number){
    let highest = number[0];
    for(const num of number){
        
        if(num>highest){
            highest= num;
        }
    }
    return highest;
}
const index_number = top(heights);
console.log(index_number)

// Find The biggest Number In An Array-----
const arra_list = [12,10,32,33,90,44];
function boys_height(list){
    let new_list = list[0];
    for(const number of list){
        if(number>new_list){
            new_list = number
        }
    }
    return new_list
}

const max_height = boys_height(arra_list);
console.log(max_height);