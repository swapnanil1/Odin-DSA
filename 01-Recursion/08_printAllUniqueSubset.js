function printSubset(ip, op, hash) {
  if (ip.length == 0) {
    const subset = op.join("");
    if (!hash[subset]) {
      hash[subset] = true;
      return 1;
    }
    return 0;
  }

  const op1 = [...op];
  const op2 = [...op];

  op2.push(ip[0]);
  const newIp = ip.slice(1);

  const countLeft = printSubset(newIp, op1, hash);
  const countRight = printSubset(newIp, op2, hash);

  return countLeft + countRight;
}

// Initialize call
const value = "aba";
const ip = value.split("");
const op = [];
const hash = {};

const count = printSubset(ip, op, hash);
const subsets = Object.keys(hash).sort();

console.log("Unique subsets are:", subsets);
console.log("Unique subsets count:", count);
