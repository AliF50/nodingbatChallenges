// Given two temperatures, return true if one is less than 0 and
// the other is greater than 100.

var icyHot=function(temp1, temp2) {
  if(temp1 < 0 && temp2 > 100 || temp1 > 100 && temp2 < 0){
      return true;
    }else{
      return false
    }
}
