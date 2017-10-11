// Given a string, return a version without both the first and last char of the
// string. The string may be any length, including 0.

var withoutEnd2=function(str) {
  if(str.length === 0){
      return str;
    }else if(str.length === 1){
      return '';
    }else{
      return str.substring(1, str.length - 1);
    }
}
