function main(array){
  quickSort(array, 0, array.length - 1);
  return array;
}

function quickSort(array, left, right){
  if(left >= right){
    return;
  }
  var pivot = array[Math.floor((left + right)/2)];
  var index = partition(array, left, right, pivot);
  quickSort(array, left, index - 1);
  quickSort(array, index, right);
}

function partition(array,left, right, pivot){
  while(left <= right){
    while(array[left] < pivot){
      left++;
    }
    while(array[right] > pivot){
      right--;
    }
    if(left <= right){
      //Swap
      var tmp = array[left];
      array[left] = array[right];
      array[right] = tmp; 
      left++;
      right--;
    }
  }
  return left;
}

array = [1,4,2,5,3];
console.log(main(array));