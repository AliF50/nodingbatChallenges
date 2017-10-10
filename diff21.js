// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

var diff21 = function(n){
  if(n > 21){
      return 2*Math.abs(n - 21);
    }else{
      return Math.abs(n - 21);
    }
}
