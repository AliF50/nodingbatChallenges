// Given a string of letters, write a function that outputs string of 1's
// and 0's of the same size corresponding to if a selected letter is in
// that position of the input string. Be sure to make x and input lowercase.
// For example isHere('l', 'hello') would output 00110.

var isHere = function(x, input){
  x = x.toLowerCase();
    input = input.toLowerCase();
    input = input.split('');
    for(var i = 0; i < input.length; i++){
      if(input[i] === x){
          input[i] = '1';
        }else{
          input[i] = '0';
        }
    }
  return input.join('');
}
