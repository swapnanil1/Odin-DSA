function kthGrammar(n, k, alert = 0) {
  if (k == 1 && n == 1) {
    if (alert % 2 == 0) return 0;
    else return 1;
  }

  const limit = Math.pow(2, n - 1);
  const mid = limit / 2;
  if (k > mid) {
    const diff = k - mid;
    return kthGrammar(n - 1, diff, alert + 1);
  } else return kthGrammar(n - 1, k, alert);
}
console.log(kthGrammar(5, 12));

// took me a day cuz on my first try i using wrong pattern
// later i found it that for any n row , if split the row in half , right half is inverse of left half
