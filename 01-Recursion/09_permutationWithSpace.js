function solve(input, output = [], count = 0) {
  if (count == 0) {
    output = [...output, input[0]];
    input = input.slice(1);
    count++;
  }
  if (input.length === 0) {
    console.log(output.join(""));
    return;
  }
  solve(input.slice(1), [...output, "_", input[0]], count);
  solve(input.slice(1), [...output, input[0]], count);
  return;
}

const value = "abc";
const input = value.split("");
const output = [];
solve(input);
