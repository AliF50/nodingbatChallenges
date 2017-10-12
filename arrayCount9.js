// Given an array of ints, return the number of 9's in the array.

var arrayCount9 = function(nums){
    var count = 0;
  for(var i = 0; i < nums.length; i++){
      if(nums[i] === 9){
          count++;
        }
    }
  return count;
}
