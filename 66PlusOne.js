var plusOne = function(digits) {
    for (let i = digits.length-1; i>=0 ;i--){
        if(digits[i] === 9){
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    return [1, ...digits];
};
console.log(plusOne([9]));










/* var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        digits[i]++;
        if(digits[i] < 10){
            return digits;
        }
        else{ //Example 49
            digits[i] = 0;
        }
    }
    //For the case 99 -> 100
    digits.unshift(1);
    return digits;
}; */





/* const plusOne = digits => {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			digits[i] = 0;
		}
		else {
			digits[i]++;
			return digits;
		}
	}
	return digits;
}

console.log(plusOne([1,2,3,4,9])); */