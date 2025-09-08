// Using Object.create(proto) makes all instances share methods via a prototype reference,
// instead of each copy having its own — saving space and memory.
// works just like class but no class or 'new' keyword syntax .
const hashMapProto = {
  _hash(str) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < str.length; i++) {
      hashCode = primeNumber * hashCode + str.charCodeAt(i);
    }
    return Math.abs(hashCode % this.capacity);
  },

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
  },

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
    this.bucket[hashedIndex].push([key, value]); // collision
  },

  get(key) {
    const hashedIndex = this._hash(key);
    if (!this.bucket[hashedIndex]) return null;

    for (let i = 0; i < this.bucket[hashedIndex].length; i++) {
      if (this.bucket[hashedIndex][i][0] === key) {
        return this.bucket[hashedIndex][i][1];
      }
    }
    return null;
  },

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
  },

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
  },

  length() {
    console.log(`buckets filled:${this.uCapacity}`);
    console.log(
      `buckets remaining before resize :${this.tCapacity - this.uCapacity}`
    );
    return this.uCapacity;
  },

  clear() {
    this.capacity = 16;
    this.bucket = Array(this.capacity);
    this.uCapacity = 0;
    console.log("All entries deleted");
  },

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
  },

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
  },

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
  },
};

// ---------------------- Factory that links to proto ----------------------
function createHashMap() {
  const map = Object.create(hashMapProto);
  map.loadFactor = 0.75;
  map.capacity = 16;
  map.bucket = Array(map.capacity);
  map.tCapacity = map.loadFactor * map.capacity;
  map.uCapacity = 0;
  return map;
}

// ---------------------- Usage ----------------------
const test = createHashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("kite", "pink");

console.log(test.get("banana"));
console.log(test.has("apple"));
test.remove("banana");
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
