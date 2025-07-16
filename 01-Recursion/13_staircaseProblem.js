// input no of stairs, op the no of way he/she can climb , if he/she 1,2,3 steps in combination
//  n=2 -> 1+1,2 -> 2 ways
// n=3 -> 1+1+1,2+1,1+2,3 -> 4 ways
// n=4 -> 1+1+1+1,1+1+2,1+2+1,1+3,2+1+1,2+2,3+1  ->  7 ways

function climbStairs(ip, op = 0, sum = 0) {
  if (sum > ip) {
    return 0;
  }
  if (sum == ip) {
    return 1;
  }
  return (
    climbStairs(ip, op, sum + 1) +
    climbStairs(ip, op, sum + 2) +
    climbStairs(ip, op, sum + 3)
  );
}
console.log(climbStairs(4));

// my first try , i got the logic right ,but implement was incorrect

// function climbStairs(ip, op = 0, sum = 0) {
//   if (sum > ip) {
//     return;
//   }
//   if (sum == ip) {
//     return op + 1;
//   }
//   climbStairs(ip, op, sum + 1);
//   climbStairs(ip, op, sum + 2);
//   climbStairs(ip, op, sum + 3);
//   return op;
// }
// console.log(climbStairs(4));
