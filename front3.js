// Given a string, we'll say that the front is the first 3 chars of the string.
// If the string length is less than 3, the front is whatever is there.
// Return a new string which is 3 copies of the front.

var front3=function(str) {
  if(str.length >= 3){
      return str.substring(0, 3) + str.substring(0, 3) + str.substring(0, 3);
    }else if(str.length === 2){
      return str.substring(0, 2) + str.substring(0, 2) + str.substring(0, 2);
    }else if(str.length === 1){
      return str.substring(0, 1) + str.substring(0, 1) + str.substring(0, 1);
    }else{
      return '';
    }
}
