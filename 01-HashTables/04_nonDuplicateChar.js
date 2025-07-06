function nonDuplicates(str) {
  const str_arr = str.split("");
  const hash = {};
  for (char of str_arr) {
    hash[char] = true;
  }
  for (char of str_arr) {
    if (hash[char]) {
      delete hash[char];
    } else return char;
  }
}
const str = "minimum";
console.log(nonDuplicates(str));

// example, the string, "minimum" has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first.
