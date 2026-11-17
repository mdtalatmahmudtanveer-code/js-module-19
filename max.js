const disa = 98;
const riya = 99;
if(disa>riya){
    console.log("disa will be win");
}
else
    console.log("riya will be will")

function getMax(num1,num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2
    }
}
const maxNumber = getMax(75,45);
console.log(maxNumber)


function maxOfThree(number1,number2,number3){
    if(number1>number2 && number1 > number3){
        console.log("number one is biggest.")
    }
    else if(number2>number1 && number2 > number3){
        console.log("number two is biggest.")
    }
    else{
        return ("number three is largest")
    }
}

const threeNumbers = maxOfThree(45,50,55);
console.log(threeNumbers)

