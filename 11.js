var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};




var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = [];

    while(left < right) {
        if(height[left] <= height[right]) {
            let diff = Math.min(height[left], height[right]) * (right-left)
            result.push(diff)
            left ++;
        } else {
            let diff = Math.min(height[left], height[right]) * (right-left)
            result.push(diff)
            right--;
        }
    }
    return Math.max(...result)
};