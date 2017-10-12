// Given an array of ints, we'll say that a triple is a value appearing
// 3 times in a row in the array. Return true if the array does not contain
// any triples.

var noTriples=function(nums) {
    for(var i = 2; i < nums.length; i++){
      if(nums[i - 2] === nums[i - 1] && nums[i - 2] === nums[i]){
          return false;
        }
    }
  return true;
}
