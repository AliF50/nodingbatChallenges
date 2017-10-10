// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.

nearHundred = function(n){
  if(Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10){
      return true;
    }else{
      return false;
    }
}
