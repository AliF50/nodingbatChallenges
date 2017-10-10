// Given a string, take the last char and return a new string with
// the last char added at the front and back, so 'cat' yields 'tcatt'/
// The original string will be length 1 or more.

var backAround = function(str){
  str = str.split('');
    str.push(str[str.length - 1]);
    str.unshift(str[str.length - 1]);
  return str.join('');
}
