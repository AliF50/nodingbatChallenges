// Given two strings, a and b, return the result of putting them together in the
// order abba, e.g. 'Hi' and 'Bye' returns 'HiByeByeHi'.

var makeAbba=function(a, b) {
  return a + b + b + a;
}
