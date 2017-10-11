// Given a string, return a 'rotated right 2' version where the last 2 chars are
// moved to the start. The string length will be at least 2.

var right2=function(str) {
  return str.substring(str.length - 2, str.length) + str.substring(0, str.length - 2);
}
