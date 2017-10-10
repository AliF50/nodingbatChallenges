// Given a string, take the first 2 chars and return the string with the 2
// chars added at both the // front and back, so 'kitten' yields 'kikittenki'
// chars are there.

var front22=function(str) {
  return str.substring(0, 2) + str + str.substring(0, 2);
}
