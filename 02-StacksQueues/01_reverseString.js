// reverse a string using stacks
class Stacks {
  constructor() {
    this.data = [];
  }
  push(ele) {
    this.data.push(ele);
  }
  pop() {
    if (this.data.length > 0)
      // aka if stack not empty
      return this.data.pop();
    else {
      return null;
    }
  }
  read() {
    // returns the end element
    if (this.data.length > 0) {
      return this.data[this.data.length - 1];
    } else return null;
  }
}
function reverseString(str) {
  const str_arr = str.split("");
  const stack = new Stacks();
  for (letter of str_arr) {
    stack.push(letter);
  }
  const revStr = [];
  while (stack.data.length > 0) {
    revStr.push(stack.pop());
  }
  return revStr;
}
const str = "abc";
console.log(reverseString(str));
