// just printing the balanced parenthesis
function parentheses(n, limit = n * 2, storage = [], left = n, right = n) {
  // base
  if (limit == 0) {
    console.log([storage.join("")]);
  }
  // hypo
  if (left > 0) {
    parentheses(n, limit - 1, [...storage, "("], left - 1, right);
  }
  if (right > left) {
    parentheses(n, limit - 1, [...storage, ")"], left, right - 1);
  }
}
parentheses(2);

console.log("now return balancedParentheses in a single array");

function balancedParenthesesArr(
  n,
  limit = n * 2,
  storage = [],
  left = n,
  right = n
) {
  // base
  if (limit == 0) {
    return [storage.join("")];
  }
  let result = [];
  // hypo
  if (left > 0) {
    result = result.concat(
      balancedParenthesesArr(n, limit - 1, [...storage, "("], left - 1, right)
    );
  }
  if (right > left) {
    result = result.concat(
      balancedParenthesesArr(n, limit - 1, [...storage, ")"], left, right - 1)
    );
  }
  return result;
}
console.log(balancedParenthesesArr(2));
