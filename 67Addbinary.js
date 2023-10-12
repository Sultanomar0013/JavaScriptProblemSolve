var addBinary = function (a, b) {
    var len1 = a.length;
    var len2 = b.length;
    var max = Math.max(len1, len2);
    //console.log(max);
    var res = '';
    var carry = 0;
    var val = 0;

    for (var i = 0; i < max; i++) {
        val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
        console.log(val)
        carry = Math.floor(val / 2);
        //console.log(carry)
        res = (val % 2) + res;
        //console.log(res)
    }

    if (carry) res = 1 + res;

    return res;
};

console.log(addBinary("1110", "1011"));












/* var addBinary = function (a, b) {
    // Resultant string
    let result = "";
    // Indices for a and b
    let i = a.length - 1;
    let j = b.length - 1;
    // Carry
    let carry = 0;
    while (i >= 0 || j >= 0) {
        // Sum of two bits
        let sum = carry;
        if (i >= 0) {
            sum += a[i--] - '0';
        }
        if (j >= 0) {
            sum += b[j--] - '0';
        }
        // Add the bit to the result
        result = sum % 2 + result;
        // Modify carry
        carry = parseInt(sum / 2);
    }
    // Final check if carry exists
    if (carry > 0) {
        result = 1 + result;
    }
    return result;
}; */




