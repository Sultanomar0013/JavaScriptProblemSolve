var getSum = function(a, b) {
    let carry;
    while(b!==0){
        carry = a&b;
        console.log(carry)
        a=a^b;
        console.log(a);
        b= carry<<1;
        console.log(b);
    }
    return a;
};

console.log(getSum(5,7))

//for 2 in binary  10
//for 5 in binsry 101
//    7           111  
//101