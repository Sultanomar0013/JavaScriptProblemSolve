var removeElement = function(nums, val){
    let j = 0;
    for(let i = 0 ; i< nums.length ; i++){
        if (nums[i] !== val){
            nums[j++] == nums[i]
        }
    }
    return j
} 

console.log(removeElement([2,4,5,3,2,6,7,2,4,6,2,1], 3))





//----------JS filter method
/* var removeElement = function (nums, val) {
    nums = nums.filter((num) => num !== val);
    return nums.length;
}; */