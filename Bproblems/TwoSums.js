function TwoSums(nums, target) {
    let pointer1 = 0;
    let pointer2=nums.length-1
    for(let i = 0; i < nums.length; i++){
        if(nums[pointer1] + nums[pointer2] === target)
            return [pointer1 + 1, pointer2 + 1];
        else if(nums[pointer1] + nums[pointer2] > target)
            pointer2--;
        else
            pointer1++;
    }
    return null;
};

module.exports = TwoSums;