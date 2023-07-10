function Sort(nums) {
    let i = 0;
    while (i < nums.length) {
      const correctIndex = nums[i];
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];  // swap
      } 
      else{
      i++;}
    }
    return nums;
  }
  //console.log(Sort([3,4,-1,1]));
  function MissingNum(nums){
    Sort(nums);
    for(let z=0;z<nums.length;z++){
        if(z!==nums[z]){
            return z;
        }
    }
    return nums.length;
  }
  
  module.exports = MissingNum;
