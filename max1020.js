// Given 2 positive int values, return the larger value that is in the range 10..20
// inclusive, or return 0 if neither is in that range.

var max1020=function(a, b) {
  if(a >= 10 && a <= 20 || b >= 10 && b <= 20){
      if(Math.max(a, b) > 20){
        if(a > 20){
          return b;
        }else if(b > 20){
          return a;
        }
      }else{
        return Math.max(a, b);
      }
    }else{
      return 0;
    }
}
