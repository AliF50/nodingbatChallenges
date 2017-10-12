// Given a string, return a new string made of every other char
// starting with the first, so 'Hello' yields 'Hlo'.
// Return n copies of the front;

var stringBits = function(n){
  var resultingString = '';
    for(var i = 0; i < n.length; i+=2){
      if(n[i]){
          resultingString += n[i];
        }
    }
  return resultingString;
}
