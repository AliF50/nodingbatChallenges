// Given a string, return a string made of the chars at indexes
//0,1, 4,5, 8,9 ...so 'kittens' yields 'kien'.

var altPairs=function(str) {
    if(str.length <= 1){
      return str;
    }
  var resultingString = '';
    for(var i = 0; i < str.length; i += 4){
        if(str[i] && str[i + 1]){
        resultingString += str[i] + str[i + 1];
        }else if(str[i]){
          resultingString += str[i];
        }
    }
  return resultingString;
}
