var isValid = function(s) {
    let closebrackets = [];
    for(let i=0; i<s.length; i++){
            if(s[i] == '('){
                closebrackets.push(')')
                //console.log(closebrackets)
            } else if(s[i] == '{'){
                closebrackets.push('}')
                //console.log(closebrackets)
            } else if(s[i] == '['){
                closebrackets.push(']')
                //console.log(closebrackets)
            } else if( closebrackets.pop() !== s[i]){
                return false;
                
            }
    }
    return !closebrackets.length
};

console.log(isValid('()'))




/* var isValid = function (inputString) {
    
    let expectedBrackets = [];


    for (let letter = 0; letter < inputString.length; letter++) {
    
        if (inputString[letter] == '{') {
            expectedBrackets.push('}');
        } else if (inputString[letter] == '[') {
            expectedBrackets.push(']');
        } else if (inputString[letter] == '(') {
            expectedBrackets.push(')');
        }

        else if (expectedBrackets.pop() !== inputString[letter]) {
            return false;
        }
    }


    return !expectedBrackets.length;
};

console.log(isValid('(){}[]')) */



//for more info go below link
//https://duncan-mcardle.medium.com/leetcode-problem-20-valid-parentheses-javascript-a75d1744ec0d





/* var isValid = function (inputString) {
    
    while (
        inputString.indexOf('()') !== -1 ||
        inputString.indexOf('{}') !== -1 ||
        inputString.indexOf('[]') !== -1
    ) {
        inputString = inputString
            .replace('()', '')
            .replace('{}', '')
            .replace('[]', '');
    }
    return !inputString.length;
}; */