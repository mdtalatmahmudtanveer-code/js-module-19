/*
* first 100 ---> 100  (যদি ১০০ প্রোডাক্ট কিনি তাহলে কোনো ডিসকোয়ান্ট নাই ১০০ তার তাকেই দিতে হবে.)

* 101 to 200 ---> 90  (যদি ১০১ তা মানে ১০০ এর বেশি ১ তা প্রোডাক্ট ও কিনি বা ১০১ থেকে টো০ পর্যন্ত প্রোডাক্ট কিনি তাহলে ৯০ টিক করে দিতে হবে ১০১ থেকে টো০ পর্যন্ত প্রোডাক্ট এর জন্য)

* above 200 ---> 70 ( যদি টো০ এর বেশি প্রোডাক্ট কিনি তাহলে টো০ এর উপরে যে প্রোডাক্ট গুলো কিনবো সেজুল ৭০ টাকা করে )
*/

function layereDiscount (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quantity <= 200){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;

        const remainingTotal = remainingQuantity * above200Price;

        const total = first100Total + second100Total + remainingTotal;

        return total;
    }
}