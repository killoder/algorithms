class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (this.head === null) {
            return null;
        }
        const newHead = this.head.next;
        const removedNode = this.head;
        this.head = newHead;
        return removedNode;
    }

    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }
}

SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Output: Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // Output: Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Output: Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

console.log(SLL1.removeFront()); // Output: Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Output: Node { data: 18, next: null }

console.log(SLL1.front()); // Output: 18
console.log(SLL1.removeFront()); // Output: null
console.log(SLL1.front()); // Output: null