import Stacks from "../00-DataStructures/stack.js";
const arr = [0, 1, 5, 2, 3]
const stack = new Stacks();
for (const letter of arr) {
    stack.push(letter);
}
sortStack(stack)
console.log(stack.data);

function sortStack(stack) {
    if (stack.size() === 1) return stack
    const temp = stack.pop()
    sortStack(stack)
    insert(stack, temp)
    return stack
}
function insert(stack, temp) {
    // base
    if (stack.read() === null || stack.read() <= temp) {
        stack.push(temp)
        return
    }
    const temp2 = stack.pop()
    insert(stack, temp)
    stack.push(temp2)
}