// A program that returns intersection/common elements inside two array but in O(n) time thanks to hashtables or objects in js
function interSection(arr1, arr2) {
  hashArr1 = arrToHashTab(arr1);
  commonArr = [];
  for (value of arr2) {
    if (hashArr1[value]) {
      commonArr.push(value);
      delete hashArr1[value];
    }
  }
  return commonArr;
}

function arrToHashTab(arr) {
  const hashTab = {};
  arr.forEach((e) => {
    hashTab[e] = true;
  });
  return hashTab;
}

const ar1 = [1, 2, 3];
const ar2 = [2, 2, 2];

console.log(interSection(ar1, ar2));
