//...Simple Shortest Method

var isPalindrome = function(x) {
    let y = x.toString().split('').reverse().join('')
    console.log(y)
    return x == x.toString().split('').reverse().join('');
};
console.log(isPalindrome(129)); 



//for more example go below link
//https://rishabh1403.com/posts/coding/leetcode/2019/12/leetcode-solution-of-palindrome-number-in-javascript