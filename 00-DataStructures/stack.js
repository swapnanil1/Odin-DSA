// stack.js
export default class Stacks {
  constructor() {
    this.data = [];
  }

  push(ele) {
    this.data.push(ele);
  }

  pop() {
    if (this.data.length > 0)
      return this.data.pop();
    else
      return null;
  }

  read() {
    if (this.data.length > 0)
      return this.data[this.data.length - 1];
    else
      return null;
  }
  size() {
    return this.data.length;
  }
}
