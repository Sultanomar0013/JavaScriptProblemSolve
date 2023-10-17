var lengthOfLongestSubstring = function (s) {
    let longestStringLength = 0;
    for (let i = 0; i < s.length; i++) {
        let currentStringSet = new Set();
        for (let j = i; j < s.length; j++) {
            if (currentStringSet.has(s[j])) {
                break;
            } else {
                currentStringSet.add(s[j]);
                console.log(currentStringSet)
            }
        }
        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
    }
    return longestStringLength;
};
console.log(lengthOfLongestSubstring("ababe"))





/* var lengthOfLongestSubstring = function (s) {
    let currentString = [];
    let longestStringLength = 0;
    for (let i = 0; i < s.length; i++) {
        const currentCharacterPosition = currentString.indexOf(s[i]);
        if (currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }
        currentString.push(s[i]);
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }
    return longestStringLength;
}; */