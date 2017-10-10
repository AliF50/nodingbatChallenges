// Given a string, if the string "del" appears starting at index 1, return a string // where that "del" has been deleted. Otherwise, return the string unchanged.

var delDel=function(str) {
  if(str.substring(1, 4) === 'del'){
      return str.substring(0, 1) + str.substring(4, str.length);
    }else{
      return str;
    }
}
