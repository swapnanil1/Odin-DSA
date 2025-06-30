function mergeSort(arr) {
  if (arr.length === 1) {
    return [arr[0]];
  }
  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2) + 1));

  return merge(left, right);
}
function merge(a, b) {
  const temp = [];
  let i, j;
  // yes while is better but can be done in for too
  for (i = 0, j = 0; i < a.length && j < b.length; ) {
    if (a[i] < b[j]) temp.push(a[i++]);
    else if (a[i] > b[j]) temp.push(b[j++]);
    else temp.push(a[i++]) && temp.push(b[j++]);
  }
  for (i; i < a.length; i++) {
    temp.push(a[i]);
  }
  for (j; j < b.length; j++) {
    temp.push(b[j]);
  }
  return temp;
}

a = [0, 1, 6, 9, 11];
b = [1, 2, 3, 4, 7, 13, 44];
console.log(merge(a, b));
