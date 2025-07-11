import Stacks from "../00-DataStructures/stack.js";
const arr = [0, 1, 5, 2, 3]
const stack = new Stacks();
for (const letter of arr) {
    stack.push(letter);
}
sortStack(stack)
function sortStack(stack) {
    if (stack.data.length === 1) return stack
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

console.log(stack.data);