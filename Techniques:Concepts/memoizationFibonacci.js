/*
The Fibonacci Sequence 
The Fibonacci sequence begins with  and  as its respective first and second terms. 
After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Fibonacci Recursion Memoization
https://www.hackerrank.com/challenges/ctci-fibonacci-numbers
*/

var memoization = {};
function fibonacci(n){
  var result = null;
  if(memoization[n]){
    return memoization[n];
  }else{
    if(n < 1){
      result = 0;
    }else if(n === 1){
      result = 1;
    }else{
      result = fibonacci(n-1) + fibonacci(n-2);
    }
  }
  memoization[n] = result;
  return result;
}

n = 6;
console.log(fibonacci(n));