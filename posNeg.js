// Given 2 int values, return True if one is negative and one is positive.
// Except if the parameter 'negative' is True, then return True only if
// both are negative.

var posNeg=function(a, b, negative) {
  if((a < 0 && b > 0 || a > 0 && b < 0) && !negative){
      return true;
    }else if(negative && a < 0 && b < 0){
      return true;
    }else{
      return false;
    }
}
