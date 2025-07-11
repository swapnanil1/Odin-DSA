// delete a element from stack using recursion, can be middle or not it's up to you
import Stacks from "../00-DataStructures/stack.js";

// init stack
const arr = [0, 1, 5, 2, 3];
const stack = new Stacks();
for (const letter of arr) {
  stack.push(letter);
}
console.log(`Stack before middle deletion : ${stack.data}`);

// find middle ele
let ele = undefined;
const stackLength = stack.size();
if (stackLength % 2 === 0) {
  ele = stack.data[Math.floor(stackLength / 2) + 1];
  console.log(`Middle Element : ${ele}`);
} else {
  ele = stack.data[Math.floor(stackLength / 2)];
  console.log(`Middle Element : ${ele}`);
}

// delete middle ele
deleteStackEle(stack, ele);

// print stack
console.log(`Stack after middle deletion  : ${stack.data}`);

function deleteStackEle(stack, ele) {
  if (stack.data[stack.size() - 1] == ele) {
    stack.pop();
    return;
  }
  const temp = stack.pop();
  deleteStackEle(stack, ele);
  stack.push(temp);
  return stack;
}
