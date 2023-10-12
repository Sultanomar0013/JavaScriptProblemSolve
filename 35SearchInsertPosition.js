var searchInsert = function(nums, target) {
    for(let i= 0; i<nums.length; i ++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length
};

console.log(searchInsert([1,3,4,5,6,7,], 2))





//------binary Search-------//
var searchInsert = function(nums, target) {
    for(let i= 0; i<nums.length; i ++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length
};