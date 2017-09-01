/*
In an array, , the elements at indices  and  (where ) form an inversion if . In other words, inverted elements  and  are considered to be "out of order". To correct an inversion, we can swap adjacent elements.

For example, consider . It has two inversions:  and . To sort the array, we must perform the following two swaps to correct the inversions:

Given  datasets, print the number of inversions that must be swapped to sort each dataset on a new line.

Input Format

The first line contains an integer, , denoting the number of datasets. 
The  subsequent lines describe each respective dataset over two lines:

The first line contains an integer, , denoting the number of elements in the dataset.
The second line contains  space-separated integers describing the respective values of .
Constraints

Output Format

For each of the  datasets, print the number of inversions that must be swapped to sort the dataset on a new line.

Sample Input

2  
5  
1 1 1 2 2  
5  
2 1 3 1 2
Sample Output

0  
4   
Explanation

We sort the following  datasets:

 is already sorted, so there are no inversions for us to correct. Thus, we print  on a new line.
 
As we performed a total of  swaps to correct inversions, we print  on a new line.
https://www.hackerrank.com/challenges/ctci-merge-sort
*/

function countInversions(array, aux, left, right){
  var ret = 0;
  //Si tenemos algo que contar
  if(right > left ){
    var m = Math.floor((left + right)/2);
    //Sacamos las inversiones de izquierda y derecha
    //Split de ambos arrays
    ret += countInversions(aux, array, left, m);
    ret += countInversions(aux, array, m+1, right);
    //Merge arrays
    var i = left;
    var j = m + 1;
    var k = left; //k controla el arreglo ordenado
    while((i <= m) && (j <= right)){
      if(aux[i] <= aux[j]){
        array[k++] = aux[i++];
      }else{
        ret += m - i + 1;
        array[k++] = aux[j++];
      }
    }
    //Vaciamos los que faltan
    while(i <= m) array[k++] = aux[i++];
    while(j <= right) array[k++] = aux[j++];
  }
  return ret;
}

function main(array){
  var aux = [...array];
  return countInversions(array, aux, 0, array.length - 1);
}

array = [2,1,3,1,2]; // 4
//array = [1, 3, 5, 2, 4, 6]; // 4
console.log(main(array));
