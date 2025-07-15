// Print N-bit binary numbers having more 1’s than 0’s for any prefix
// i is 1 , j is 0 count
function print(n, ones = n, zeros = 0, result = []) {
  if (result.length == n) {
    console.log(result);
    return;
  }

  if (ones > 0) print(n, ones - 1, zeros, [...result, 1]);
  if (zeros < n - ones) {
    print(n, ones, zeros + 1, [...result, 0]);
  }
}
print(4);

console.log("Returning insted of print");

function NBitBinaryNumber(n, ones = n, zeros = 0, result = []) {
  if (result.length == n) {
    return result.join("");
  }
  let output = [];
  if (ones > 0)
    output = output.concat(
      NBitBinaryNumber(n, ones - 1, zeros, [...result, "1"])
    );
  if (zeros < n - ones)
    output = output.concat(
      NBitBinaryNumber(n, ones, zeros + 1, [...result, "0"])
    );
  return output;
}
console.log(NBitBinaryNumber(4));
