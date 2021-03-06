
// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var total = 0;
var sum = function(array) {
    if (array.length === 0) {
        return total;
    }
    else {
        total += array[0];
        array = array.slice(1, array.length);
        return sum(array);
    }
};

console.log(sum([1,2,3,4,5,6]));

//input: an array of integers
//output: single integer representing sum of the array's elements
//constraints: none
//edge cases: empty array

//create a total variable
//add first value of array to total
//slice first value
//call the function again
//when array's length is zero, return the total
