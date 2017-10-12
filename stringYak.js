// Suppose the string 'yak' is unlucky. Given a string, return a version where all
// the 'yak' are removed, but the 'a' can be any char. The 'yak' strings will not overlap.

var stringYak = function(str){
  var find = 'y.k';
  var re = new RegExp(find, 'g');

  str = str.replace(re, '');
    return str;
}
