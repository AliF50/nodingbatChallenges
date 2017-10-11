// Given a string of even length, return a string made of the middle two chars,
// so the string 'string' yields 'ri'. The string length will be at least 2.

var middleTwo=function(str) {
  if(str.length % 2 === 0){
      if(str.length === 2){
          return str;
        }else{
          return str.substring(str.length/2 - 1, str.length/2 + 1);
        }
    }else{
      return str;
    }
}
