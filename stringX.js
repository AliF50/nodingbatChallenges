// Given a string, return a version where all the 'x' have been removed.
// Except an 'x' at the very start or end should not be removed.

var stringX = function(str){
  var stringToReplaceX = str.substring(1, str.length - 1);
    var stringReplaced = stringToReplaceX.replace(/x/g, '');
  return str.substring(0, 1) + stringReplaced + str.substring(str.length - 1, str.length);
}
