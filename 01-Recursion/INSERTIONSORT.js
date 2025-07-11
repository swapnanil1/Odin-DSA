function insertionSort(array) {
  for (let j = 1; j <= array.length; j++) {
    let j_cpy = j;
    for (let i = j_cpy - 1; i >= 0 && j_cpy >= 0; i--) {
      if (array[j_cpy] < array[i]) {
        [array[j_cpy], array[i]] = [array[i], array[j_cpy]];
        j_cpy--;
      }
    }
  }
  return array;
}

const arr = [5, 3, 2, 4, 1];
console.log(insertionSort(arr));
