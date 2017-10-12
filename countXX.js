// Count the number of 'xx' in the given string. We'll say that overlapping is allowed,
// so 'xxx' contains 2 'xx'.

var countXX = function(str){
  var count = 0;
    for(var i = 1; i < str.length; i++){
      if(str[i] === 'x' && str[i - 1] === 'x'){
          count++;
        }
    }
  return count;
}
