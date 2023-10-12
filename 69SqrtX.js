function mySqrt(x) {
    let left = 0;
    let right = x;
    if (x <= 1) {
        return x;
    }
    while (left < right) {
        let middle = Math.floor((right + left) / 2);
       // console.log('middle :' + middle)
        let square = middle * middle;
        //console.log('square:'+square)
        if (square === x) return middle;
        if (square < x) {
            left = middle + 1;
            //console.log('left:'+left)
        } else {
            right = middle;
           // console.log('rigth:'+right)
        }
    }
    return left - 1;
}

console.log(mySqrt(14))