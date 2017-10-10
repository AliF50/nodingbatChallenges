// Return true if the given string begins with 'mix', except the 'm' can be anything,
//so 'pix', '9ix' .. all count.

var mixStart=function(str){
  if(str[1] === 'i' && str[2] === 'x'){
      return true;
    }else{
      return false;
    }
}
