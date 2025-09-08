function CreateNode(val) {
  return {
    val,
    next: null,
  };
}

function List() {
  let head = null;
  let size = 0;
  function isEmpty() {
    if (size === 0) {
      return true;
    } else return false;
  }
  function prepend(data) {
    const node = CreateNode(data);
    node.next = head;
    head = node;
    size++;
  }
  function append(data) {
    const node = CreateNode(data);
    if (isEmpty()) {
      head = node;
    } else {
      let counter = head;
      while (counter.next) {
        counter = counter.next;
      }
      counter.next = node;
    }
    size++;
  }
  function insert(data, index) {
    const node = CreateNode(data);
    if (index < 0 || index > size) {
      return;
    } else {
      let current = head;
      for (let counter = 0; counter < index; counter++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
    size++;
  }
  function remove(index) {
    if (index < 0 || index > size) {
      return;
    } else if (index === 0) {
      head = head.next;
    } else {
      let current = head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
  }
  function removeVal(data) {
    let index = 0;
    let counter = head;
    while (counter) {
      if (counter.val === data) {
        remove(index);
        console.log(`Found and removed node ${data}`);
        return;
      }
      counter = counter.next;
      index++;
    }
    console.log("Data not present");
  }

  function show() {
    if (isEmpty()) {
      console.log("Empty");
      return;
    }
    let cur = head;
    while (cur) {
      process.stdout.write(cur.val + " -> ");
      cur = cur.next;
    }
    console.log("null");
  }
  function search(value) {
    if (isEmpty()) {
      return console.log("Empty list");
    } else {
      let cur = head;
      for (let i = 0; i < size; i++) {
        if (cur.val === value) {
          return console.log(`Found ${value} at index ${i}`);
        }
        cur = cur.next;
      }
      return console.log("Not found");
    }
  }
  function reverse() {
    let prev = null;
    let current = head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    head = prev;
  }
  return {
    isEmpty,
    prepend,
    append,
    insert,
    remove,
    removeVal,
    show,
    search,
    reverse,
  };
}

const aList = List();
aList.show();
aList.isEmpty();
aList.prepend("i");
aList.append("am");
aList.show();
aList.insert("swapnanil", 1);
aList.insert("Chakraborty", 2);
aList.show();
aList.remove(0);
aList.show();
aList.removeVal("Chakraborty");
aList.show();
aList.search("am");
aList.reverse();
aList.show();
