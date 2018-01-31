/*
https://www.hackerrank.com/challenges/ctci-bubble-sort
O(N)

*/

function main(a) {
    bubbleSort(a);
}

function bubbleSort(array){
    var numberOfSwaps = 0;
    for (var i = 0; i < array.length; i++) {
        // Track number of elements swapped during a single array traversal

        for (var j = 0; j < array.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (array[j] > array[j + 1]) {
                var tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
                numberOfSwaps++;
            }
        }

        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }
    console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
    console.log(`First Element: ${array[0]}`);
    console.log(`Last Element: ${array[array.length-1]}`);
}

array = [2,6,3,1,7,4,8,9,10,5];
console.log(main(array));
