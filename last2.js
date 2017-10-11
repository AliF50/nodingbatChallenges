// Given a string, return the count of the number of times that a substring
// length 2 appears in the string and also as the last 2 chars of the string,
// so 'hixxxhi' yields 1 (we won't count the end substring).

var last2=function(str) {
  if(str.length <= 2){
      return 0;
    }else{
      var stringToLookOutFor = str.substring(str.length - 2, str.length);
        var count = 0;
        for(var i = 0; i < str.length - 1; i++){
          if(str[i] + str[i + 1] === stringToLookOutFor){
              count++;
            }
        }
      return count - 1;
    }
}
