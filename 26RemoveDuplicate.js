/* var removeDuplicates = function(nums) {
    for(let i=0; i< nums.length; i++){
        for(let j=i+1; j< nums.length; j++){
            if(nums[i] === nums[j]){
                nums.splice(j, 1);
                //j--;
            }
        }
    }
    return nums;
}; */



/* var removeDuplicates = function(nums) {
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if( nums[i] === nums [j]){
                nums.splice(j,1);
                j--
            }
        }
    }
    return nums;
};


console.log( removeDuplicates([1,1,2])) */

const removeDuplicates = function(nums){
    if (nums.length === 0)
    return 0;
    let i = 0;
    console.log(nums[i])
    let j = 1;
    while ( j < nums.length){
        if(nums[j] !== nums[i]){
            i++
            nums[i] = nums[j]
            console.log(nums[i])
            j++
        }else j++
    }
    return  i + 1


}
console.log(removeDuplicates([1,2,7,6,45,3,3,5,76,1,8]))