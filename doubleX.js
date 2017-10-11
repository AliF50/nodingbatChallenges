// Given a string, return true if the first instance of 'x' in the string is
// immediately followed by another 'x'.

var doubleX=function(str) {
  var index = str.indexOf('x');
    return str[index + 1] === 'x';
}
