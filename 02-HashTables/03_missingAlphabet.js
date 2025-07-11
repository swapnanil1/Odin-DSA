// if your are not paying with computation then you are with storage
// returns the first not found difference between english alphabets ands the string passed
function getMissingAlphabet(str) {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const str_arr = str.split("");
  const hashTable = {};
  for (char of str_arr) {
    hashTable[char] = true;
  }
  for (letter of alphabets) {
    if (!hashTable[letter]) {
      return letter;
    }
  }
}

const str = "the quick brown box jumps over a lazy dog";
console.log(getMissingAlphabet(str));
