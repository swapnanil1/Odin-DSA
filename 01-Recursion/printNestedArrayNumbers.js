function fetchNumbersFromNestedArr(array) {
  for (ele of array) {
    if (typeof ele == "object") fetchNumbersFromNestedArr(ele);
    else console.log(ele);
  }
}
const arr = [1, 2, [3, 4], 5, 6, [7, [8, 9]], 10];
fetchNumbersFromNestedArr(arr);
