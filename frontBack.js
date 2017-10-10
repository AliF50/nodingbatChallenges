// Given a string, return a new string where the first and last chars
// have been exchanged.

var frontBack=function(str) {
  str = str.split('');
    var temp = str[str.length - 1]
    str[str.length - 1] = str[0];
    str[0] = temp;
    return str.join('');
}
