// Given 2 int values, return whichever value is nearest to the value 10,
// or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute
// value of a number.

var close10=function(a, b){
  var aDist = Math.abs(10 - a);
    var bDist = Math.abs(10 - b);
    if(aDist === bDist){
      return 0;
    }else if(aDist > bDist){
      return b;
    }else{
      return a;
    }
}
