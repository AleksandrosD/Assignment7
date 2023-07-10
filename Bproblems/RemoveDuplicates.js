var removeDuplicates = function(nums) {
    
    let pointer1;
    let pointer2=0;
    
   
    for(pointer1=0;pointer1<nums.length;pointer1++){
        if(nums[pointer1]!==nums[pointer2]){
            pointer2++;
            nums[pointer2]=nums[pointer1];
        }
    }
    return pointer2+1;
};
module.exports = removeDuplicates;