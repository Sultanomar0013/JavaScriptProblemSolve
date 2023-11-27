/* var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length-1;i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate([2,4,5,1,2])) */

function containsDuplicate(nums){
    nums = nums.sort();
for (let i= 0; i < nums.length; i++){
    if (nums[i] == nums[i+1]){
        
      return true
     

   }
  }
   return false;
}
console.log(containsDuplicate([2,4,5,1,2]))