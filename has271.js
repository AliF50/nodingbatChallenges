// Given an array of ints, return true if it contains a 2, 7, 1 pattern -- a value,
// followed by the value plus 5, followed by the value minus 1. Additionally the 271
// counts even if the '1' differs by 2 or less from the correct value.

var has271 = function(nums){
  for(var i = 0; i < nums.length - 2; i++){
      if(nums[i] === 2 && nums[i] === nums[i + 1] - 5 && (nums[i] === nums[i + 2] || nums[i] === nums[i + 2] + 1)){
           return true;
           }
     }
     return false;
}
