// Given an array of strings, find the longest common prefix each string has.
// i.e. a list of yes, yodel, yeah should output y.

var biggestPre = function(input){
  var prefix = '';
    input = input.sort();
    var prefixSearch = input[0];
    var compareTo = input[input.length - 1];
    for(var i = 0; i < compareTo.length; i++){
      if(prefixSearch[i] === compareTo[i]){
          prefix += prefixSearch[i];
        }else{
          break;
        }
    }
    return prefix;
}
