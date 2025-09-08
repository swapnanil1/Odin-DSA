// factoryFn method
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
  function get(key) {
    const hashedIndex = Hash(key);
    if (hashedIndex < 0 || hashedIndex >= bucket.length) {
      return null;
    }
    if (!bucket[hashedIndex]) return null;

    for (let i = 0; i < bucket[hashedIndex].length; i++) {
      if (bucket[hashedIndex][i][0] === key) {
        return bucket[hashedIndex][i][1];
      }
    }
    return null;
  }

  function has(key) {
    const hashedIndex = Hash(key);
    if (hashedIndex < 0 || hashedIndex >= bucket.length) {
      console.log("Invaild Key");
      return false;
    }
    if (!bucket[hashedIndex]) return null;
    for (let i = 0; i < bucket[hashedIndex].length; i++) {
      if (bucket[hashedIndex][i][0] === key) {
        console.log(
          `Found/Exist: [${bucket[hashedIndex][i][0]},${bucket[hashedIndex][i][1]}]`
        );
        return true;
      }
    }
    console.log(`[${key}] Not Found`);
    return false;
  }

  function remove(key) {
    const hashedIndex = Hash(key);
    if (hashedIndex < 0 || hashedIndex >= bucket.length) {
      return null;
    }
    if (!bucket[hashedIndex]) return null;

    for (let i = 0; i < bucket[hashedIndex].length; i++) {
      if (bucket[hashedIndex][i][0] === key) {
        const removed = bucket[hashedIndex].splice(i, 1)[0];
        console.log(`Removed [${removed}]`);
        if (bucket[hashedIndex].length === 0) {
          bucket[hashedIndex] = undefined;
          uCapacity--;
        }
        return removed[1];
      }
    }
    return null;
  }
  function length() {
    console.log(`buckets filled:${uCapacity}`);
    console.log(`buckets remaining before resize :${tCapacity - uCapacity}`);
    return uCapacity;
  }
  function clear() {
    bucket = Array(capacity);
    capacity = 16;
    uCapacity = 0;
    console.log("All entries deleted");
  }
  function keys() {
    console.log("----------> Printing all keys in the map <----------");

    const arrayOfKeys = [];
    if (bucket.length < 0) return [];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i]) {
        for (let j = 0; j < bucket[i].length; j++) {
          arrayOfKeys.push(bucket[i][j][0]);
        }
      }
    }
    return arrayOfKeys;
  }
  function values() {
    console.log("----------> Printing all values in the map <----------");

    const arrayOfValues = [];
    if (bucket.length < 0) return [];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i]) {
        for (let j = 0; j < bucket[i].length; j++) {
          arrayOfValues.push(bucket[i][j][1]);
        }
      }
    }
    return arrayOfValues;
  }
  function entries() {
    console.log(
      "----------> Printing Entries in [Key,Value] pattern <----------"
    );
    const arrayOfEntries = [];
    if (bucket.length < 0) return [];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i]) {
        for (let j = 0; j < bucket[i].length; j++) {
          arrayOfEntries.push([bucket[i][j][0], bucket[i][j][1]]);
        }
      }
    }
    return arrayOfEntries;
  }
  return { set, get, has, remove, length, clear, keys, values, entries };
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
test.set("cake", "killer");
test.set("smooth", "criminal");
test.set("working", "fireman");
test.set("resting", "fisherman");
console.log(test.get("kite"));
console.log(test.get("lion"));
test.has("jacket");
test.remove("jacket");
console.log(test.has("jacket"));

test.length();
console.log(test.keys());
console.log(test.values());
test.remove("resting");
console.log(test.entries());
