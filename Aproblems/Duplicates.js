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
  //console.log(Sort([4,3,2,7,8,2,3,1]));

  function Duplicates(nums){
   Sort(nums);
   const ans=[];
    for(let z=0;z<nums.length;z++){
        if(nums[z]!==z+1){
            ans.push(nums[z]);
        }
    }
    return ans;
  }
  //console.log(Duplicates([4,3,2,7,8,2,3,1]))
  module.exports = Duplicates;
