// Given an array of ints, return true if one of the first 4 elements in
// the array is a 9. The array length may be less than 4

var arrayFront9 = function(nums){
    var index = nums.indexOf(9);
  return index >= 0 && index <= 3;
}
