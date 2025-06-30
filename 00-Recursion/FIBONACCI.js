function fibs(n) {
  const fibonacci = [0, 1];
  if (n == 0) return [0];
  else if (n == 1) return fibonacci;
  else {
    let prev = 0;
    let current = 1;
    for (let i = 2; i < n; i++) {
      fibonacci.push(prev + current);
      [prev, current] = [current, prev + current];
    }
  }
  return fibonacci;
}
function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = fibsRec(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}
console.log(`Using Loops     : ${fibs(8)}`);
console.log(`Using Recursion : ${fibsRec(8)}`);
