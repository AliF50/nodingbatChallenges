// Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.

var withoutEnd=function(str) {
  return str.substring(1, str.length - 1);
}
