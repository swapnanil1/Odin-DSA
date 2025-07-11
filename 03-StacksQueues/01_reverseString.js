// reverse a string using stacks
import Stacks from "../00-DataStructures/stack.js";
function reverseString(str) {
  const str_arr = str.split("");
  const stack = new Stacks();
  for (const letter of str_arr) {
    stack.push(letter);
  }
  const revStr = [];
  while (stack.size() > 0) {
    revStr.push(stack.pop());
  }
  return revStr;
}
const str = "abc";
console.log(reverseString(str));
