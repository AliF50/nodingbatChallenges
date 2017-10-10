// Return true if the given string contains between 1 and 3 'e' chars.

var stringE=function(str){
    var count = 0;
  for(var i = 0; i < str.length; i++){
      if(str[i] === 'e'){
          count++;
        }
        if(count > 3){
          return false;
        }
    }
  if(count > 0 && count <= 3){
    return true;
  }else{
    return false;
  }
}
