// reverse a stack in-place using recursion
import Stacks from "../00-DataStructures/stack.js";
const arr = [1, 2, 3, 4, 5];
const stack = new Stacks();
for (const ele of arr) {
  stack.push(ele);
}
console.log(`Stack before reversal : ${stack.data}`);
reverseStack(stack);
console.log(`Stack after reversal : ${stack.data}`);
function reverseStack(stack) {
  // base case
  if (stack.size() === 1) return stack;
  const endEle = stack.pop();
  reverseStack(stack);
  insertAtStackBottom(stack, endEle);
  return stack;
}
function insertAtStackBottom(stack, firstEle) {
  // base case
  if (stack.size() === 0) {
    stack.push(firstEle);
    return;
  }
  const shiftedEle = stack.pop();
  insertAtStackBottom(stack, firstEle);
  stack.push(shiftedEle);
}
