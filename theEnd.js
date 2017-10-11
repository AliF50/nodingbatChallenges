// Given a string, return a string length 1 from its front, unless front is false,
// in which case return a string length 1 from its back. The string will be non-em

var theEnd=function(str, front) {
  if(front){
      return str[0];
    }else{
      return str[str.length - 1];
    }
}
