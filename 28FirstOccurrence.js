var strStr = function (haystack, needle) {
    if (haystack === needle || needle === ""){
        return 0;
    } 
    for(let i= 0; i<haystack.length; i++){
        if(haystack[i] === needle[0]){
            let sub = haystack.substring(i, i+needle.length)
            if(sub === needle){
                return i;
            }
        }
    }return -1
};

console.log(strStr(('sadbutsad'), 'sad'));













//--------using js Index of--------//
/* var strStr = function (haystack, needle) {
    let position = haystack.indexOf(needle);
    //returns -1 if not in index else returns the index
    return position;
};  */