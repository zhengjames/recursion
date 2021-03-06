// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var total = 0;
var sumBelow = function(n) {
  if (n > 0) {
    total += n;
    sumBelow(n-1);
  }
  return total;
};

console.log(sumBelow(4))
//input: an integer
//output: an integer representing sum btween 1-n
//edge cases: negative ints
//constraints: none

//method
//make total variable
//if n is greater than zero, add to the total
//subtract 1 from n and call sumBelow again