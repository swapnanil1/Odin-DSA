class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }

    insert(val, idx) {
        if (idx < 0 || idx > this.size) return;
        if (idx === 0) return this.prepend(val);

        const node = new Node(val);
        let cur = this.head;
        for (let i = 0; i < idx - 1; i++) {
            cur = cur.next;
        }
        node.next = cur.next;
        cur.next = node;
        this.size++;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.size) return;

        if (idx === 0) {
            this.head = this.head.next;
        } else {
            let cur = this.head;
            for (let i = 0; i < idx - 1; i++) {
                cur = cur.next;
            }
            cur.next = cur.next.next;
        }
        this.size--;
    }

    removeValue(val) {
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            if (current.val === val) {
                this.remove(i)
                return;
            }
            current = current.next;
        }
        console.log(`${val} is not inside the list`)
    }

    show() {
        if (this.isEmpty()) {
            console.log('Empty');
            return;
        }

        let cur = this.head;
        while (cur) {
            process.stdout.write(cur.val + ' -> ');
            cur = cur.next;
        }
        console.log('null');
    }

    search(val) {
        if (this.isEmpty()) {
            return console.log('Empty list');
        } else {
            let cur = this.head;
            for (let i = 0; i < this.size; i++) {
                if (cur.val === val) {
                    return console.log(`Found ${val} at index ${i}`)
                }
                cur = cur.next;
            }
            return console.log('Not found');
        }
    }

    reverse() {
      // todo
    }
}

// Test
const list = new List();
list.show();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.show();
list.append(5);
list.show();
list.insert(40, 0);
list.show();
list.insert(15, 2);
list.show();
list.remove(5);
list.show();
list.removeValue(10)
list.show();
list.search(15)
