// Given a string, return the string made of its first two chars, so the String
// 'Hello' yields 'He'. If the string is shorter than length 2, return whatever

var firstTwo=function(str) {
  if(str.length >= 2){
      return str.substring(0, 2);
    }else{
      return str;
    }
}
