class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.bucket = Array(this.capacity);
    this.tCapacity = this.loadFactor * this.capacity; // total capacity before resize
    this.uCapacity = 0; // used slots
  }

  // -------------------------- Hash function ------------------------------
  _hash(str) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < str.length; i++) {
      hashCode = primeNumber * hashCode + str.charCodeAt(i);
    }
    return Math.abs(hashCode % this.capacity);
  }

  // -------------------------- Resize/rehash ------------------------------
  _expandBucket() {
    this.capacity *= 2;
    this.tCapacity = this.loadFactor * this.capacity;
    this.uCapacity = 0;
    const oldBucket = this.bucket;
    this.bucket = Array(this.capacity);

    for (let i = 0; i < oldBucket.length; i++) {
      if (oldBucket[i]) {
        for (let j = 0; j < oldBucket[i].length; j++) {
          this.set(oldBucket[i][j][0], oldBucket[i][j][1]);
        }
      }
    }
  }

  // -------------------------- Main ops -----------------------------------
  set(key, value) {
    if (this.uCapacity >= this.tCapacity) {
      this._expandBucket();
    }
    const hashedIndex = this._hash(key);

    if (!this.bucket[hashedIndex]) {
      this.bucket[hashedIndex] = [[key, value]];
      this.uCapacity++;
      return;
    }

    for (let i = 0; i < this.bucket[hashedIndex].length; i++) {
      if (this.bucket[hashedIndex][i][0] === key) {
        this.bucket[hashedIndex][i][1] = value; // update
        return;
      }
    }

    this.bucket[hashedIndex].push([key, value]); // collision -> push
  }

  get(key) {
    const hashedIndex = this._hash(key);
    if (!this.bucket[hashedIndex]) return null;

    for (let i = 0; i < this.bucket[hashedIndex].length; i++) {
      if (this.bucket[hashedIndex][i][0] === key) {
        return this.bucket[hashedIndex][i][1];
      }
    }
    return null;
  }

  has(key) {
    const hashedIndex = this._hash(key);
    if (!this.bucket[hashedIndex]) return false;

    for (let i = 0; i < this.bucket[hashedIndex].length; i++) {
      if (this.bucket[hashedIndex][i][0] === key) {
        console.log(
          `Found/Exist: [${this.bucket[hashedIndex][i][0]},${this.bucket[hashedIndex][i][1]}]`
        );
        return true;
      }
    }
    console.log(`[${key}] Not Found`);
    return false;
  }

  remove(key) {
    const hashedIndex = this._hash(key);
    if (!this.bucket[hashedIndex]) return null;

    for (let i = 0; i < this.bucket[hashedIndex].length; i++) {
      if (this.bucket[hashedIndex][i][0] === key) {
        const removed = this.bucket[hashedIndex].splice(i, 1)[0];
        console.log(`Removed [${removed}]`);
        if (this.bucket[hashedIndex].length === 0) {
          this.bucket[hashedIndex] = undefined;
          this.uCapacity--;
        }
        return removed[1];
      }
    }
    return null;
  }

  length() {
    console.log(`buckets filled:${this.uCapacity}`);
    console.log(
      `buckets remaining before resize :${this.tCapacity - this.uCapacity}`
    );
    return this.uCapacity;
  }

  clear() {
    this.capacity = 16;
    this.bucket = Array(this.capacity);
    this.uCapacity = 0;
    console.log("All entries deleted");
  }

  keys() {
    console.log("----------> Printing all keys in the map <----------");
    const arrayOfKeys = [];
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i]) {
        for (let j = 0; j < this.bucket[i].length; j++) {
          arrayOfKeys.push(this.bucket[i][j][0]);
        }
      }
    }
    return arrayOfKeys;
  }

  values() {
    console.log("----------> Printing all values in the map <----------");
    const arrayOfValues = [];
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i]) {
        for (let j = 0; j < this.bucket[i].length; j++) {
          arrayOfValues.push(this.bucket[i][j][1]);
        }
      }
    }
    return arrayOfValues;
  }

  entries() {
    console.log(
      "----------> Printing Entries in [Key,Value] pattern <----------"
    );
    const arrayOfEntries = [];
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i]) {
        for (let j = 0; j < this.bucket[i].length; j++) {
          arrayOfEntries.push([this.bucket[i][j][0], this.bucket[i][j][1]]);
        }
      }
    }
    return arrayOfEntries;
  }
}

// ------------------ Usage -----------------------
const test = new HashMap();
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
