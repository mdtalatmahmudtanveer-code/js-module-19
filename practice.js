//  Find the biggest number in three numbers:
/*
function maxOfThree(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b >c ){
        return b
    }
    else{
        return c
    }
   
}

const number = maxOfThree(50,51,49);
console.log("The largest number of funtion is = ",number)

 */
// Find the biggest number in an array


// const studentsHeight = [67,70,64,61,60,75,79];
/*

function bigNumber(arrayNumbers){
    let supposeMax = arrayNumbers[0];
    for(const num of arrayNumbers){
        if(num>supposeMax){
            supposeMax = num;
        }
    }
    return supposeMax;
}
const max_height = bigNumber(studentsHeight);
console.log(max_height);*/

// wood account
/*
function woodQuantity(chairQuantity,bedQuantity,tableQuantity){
    const perchairQuantity = 3;
    const perbedQuantity = 10;
    const pertableQuantity = 50;

    const chairTotalQuantity = perchairQuantity*chairQuantity;
    const bedTotalQuantity = perbedQuantity*bedQuantity;
    const tableTotalQuantity = pertableQuantity*tableQuantity;

    const totalQuntity = chairTotalQuantity+bedTotalQuantity+tableTotalQuantity;
    return totalQuntity;
}

const almostQuantity = woodQuantity(0,0,1);
console.log(almostQuantity);*/



// A program to locate an expensive mobile phone(দামি মোবাইল তা খুঁজে বের করার প্রোগ্রাম)
/*const mobiles = [
    {name : 'Samsung', price : 500, color :'Golden', camera :'100mp'},
    {name : 'Vivo', price : 350, color : 'Blue', camera :'80mp'},
    {name : 'Oppo', price : 300, color : 'Black', camera : '80mp'},
    {name : 'Xiomi', price : 450, color : 'meroon', camera : '90mp'},
]
function gadget(mobiles){
    let min = mobiles[0];
    for(const number of mobiles){
        if(number.price < min.price){
            min = number
        }
    }
    return min
}
const cheap = gadget(mobiles)
console.log(cheap)*/


// js-problems-part-2-practice-task
// Task -1: Find the lowest number in the array below.
/*
const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if (number < min){
            min = number;
        }
    }
    return min;
}
const output = lowestNumber(heights2)
console.log(output)*/



// Task -2: Find the friend with the smallest name.
/*const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function stringSize (names){
    let smallest = names[0];
    for(const size of names){
        if (size.length < smallest.length){
            smallest = size;
        }
    }
    return smallest;
}

const output = stringSize(heights2);
console.log(output);*/


// Task-3: Your task is to calculate the total budget required to buy electronics:
/*
function calculateElectronicsBudget (laptop,tablets,mobile){
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const totalLaptop = perLaptop * laptop;
    const totalTablet = perTablet * tablets;
    const totalMobile = perMobile * mobile;

    const total = totalLaptop + totalTablet + totalMobile;
    return total;
}

const totalBudget = calculateElectronicsBudget(2,3,1);
console.log(totalBudget)*/

/* Task-4: You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.*/
/*
const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice (devices){
    let totalPrice = 0;
    for(const device of devices){
        totalPrice = totalPrice + device.price;
    }
    const average = totalPrice / devices.length;
    return average;

}

const output = findAveragePhonePrice (phones);
console.log(output)*/