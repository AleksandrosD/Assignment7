function Sort(nums) {
    let i = 0;
    while (i < nums.length) {
      const correctIndex = nums[i]-1;
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];  // swap
      } 
      else{
      i++;}
    }
    return nums;
  }
  function OneDup(nums){
    Sort(nums);
    return (nums[nums.length-1]);
  }
  module.exports = OneDup;