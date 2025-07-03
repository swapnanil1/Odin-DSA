function selectionSort(array) {
  for (let index = 0; index < array.length; index++) {
    let lowest = index;
    for (let swapper = index; swapper < array.length; swapper++) {
      if (array[swapper] < array[lowest]) lowest = swapper;
    }
    if (lowest != index)
      [array[index], array[lowest]] = [array[lowest], array[index]];
  }
  return array;
}

const arr = [5, 3, 2, 4, 1];
console.log(selectionSort(arr));
// 10 X 2 20 , 9 8 7 6 5 4 3 2 1