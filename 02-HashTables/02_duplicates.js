function checkDuplicate(arr) {
  const hashT = {};
  for (const e of arr) {
    if (hashT[e]) {
      return e;
    }
    hashT[e] = true;
  }
  return null;
}

const example = ["a", "b", "c", "d", "c", "e", "f"];
console.log(checkDuplicate(example));
// check for duplicates in a array using hash tables , hashtable aka object dont allow duplicates
// so while converting arr to hash we can check if the empty(toBeFilled) hashtable has the value already or not
