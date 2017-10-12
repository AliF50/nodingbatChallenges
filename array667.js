// are next to each other in the array. Also count instances where
// the second '6' is actually a 7.

var array667 = function(nums){
    var count = 0;
  for(var i = 0; i < nums.length - 1; i++){
      if(nums[i] === 6 && (nums[i + 1] === 6 || nums[i + 1] === 7))
          count++;
    }
  return count;
}
