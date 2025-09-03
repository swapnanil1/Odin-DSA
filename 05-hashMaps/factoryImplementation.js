function HashMap() {
  const loadFactor = 0.75;
  let capacity = 16;
  let bucket = Array(capacity);
  let tCapacity = loadFactor * capacity; // the total capacity before resize
  let uCapacity = 0; // the used capacity till now

  // ---------------------------------Main function---------------------------------------------
  function Hash(str) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < str.length; i++) {
      hashCode = primeNumber * hashCode + str.charCodeAt(i);
    }
    return Math.abs(hashCode % capacity);
  }

  // ---------------------------------Expand or resize filled function--------------------------
  function expandBucket() {
    capacity = capacity * 2;
    tCapacity = loadFactor * capacity;
    uCapacity = 0;
    let newBucket = Array(capacity);
    for (let i = 0; i < bucket.length; i++) {
      // if empty checks current index is not undefined as hashMaps are stored at random order.
      // example - bucket[2] was not ever filled even if we maxed out useable entries
      if (bucket[i]) {
        for (let j = 0; j < bucket[i].length; j++) {
          set(bucket[i][j][0], bucket[i][j][1], newBucket);
        }
      }
    }
    return newBucket;
  }
  function set(key, value, useBucket = bucket) {
    const hashedIndex = Hash(key);
    if (uCapacity >= tCapacity) {
      bucket = expandBucket();
    }
    if (hashedIndex < 0 || hashedIndex >= useBucket.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (!useBucket[hashedIndex]) {
      useBucket[hashedIndex] = [[key, value]];
      uCapacity++;
      return;
    } else {
      for (let i = 0; i < useBucket[hashedIndex].length; i++) {
        if (useBucket[hashedIndex][i][0] === key) {
          // update value if key present
          useBucket[hashedIndex][i][1] = value;
          return;
        }
      }
      // unique key with same hashedIndex found , push it in
      useBucket[hashedIndex].push([key, value]);
    }
  }
  return { set, bucket };
}

const test = HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
