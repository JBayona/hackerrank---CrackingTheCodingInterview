/*
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. 
For example, if left rotations are performed on array , then the array would become .

Given an array of  integers and a number, , perform  left rotations on the array. 
Then print the updated array as a single line of space-separated integers.

Input Format

The first line contains two space-separated integers denoting the respective values of  
(the number of integers) and  (the number of left rotations you must perform). 
The second line contains  space-separated integers describing the respective 
elements of the array's initial state.
*/

function arrayRotation(array, k){
    let leftResult = [];
    let rightResult = [];
    let tam = array.length;
    let index = 0;
    //Left
    for(let i = 0; i < array.length; i++){
        leftResult[index] = array[((index + k)%tam + tam)%tam];
        index++;
    }
    console.log(leftResult);
    //Right
    index = 0;
    for(let i = 0; i < array.length; i++){
        rightResult[index] = array[((index - k)%tam + tam)%tam];
        index++;
    }
    console.log(rightResult)
  }

  array = [1,2,3,4,5];
  k = 1;
  console.log(arrayRotation(array, k));