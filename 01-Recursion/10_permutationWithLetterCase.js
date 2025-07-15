function permutateLetterCase(ip, op = [], set = new Set()) {
  //base case
  if (ip.length == 0) {
    set.add(op.join(""));
    return set;
  }
  //int check
  if (typeof ip[0] == "number") {
    op = [...op, ip[0]]; // throw number to op
    ip = ip.slice(1); // skip int
  }
  // hypo
  permutateLetterCase(ip.slice(1), [...op, ip[0].toLowerCase()], set);
  permutateLetterCase(ip.slice(1), [...op, ip[0].toUpperCase()], set);
  return Array.from(set);
}

const value = "a1b2";
const input = value.split("");
console.log(permutateLetterCase(input));
