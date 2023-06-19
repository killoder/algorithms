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
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }

    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    display() {
        let currentNode = this.head;
        let values = [];

        while (currentNode !== null) {
            values.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return values.join(", ");
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const SLL1 = new SLL();
console.log(SLL1.addFront(76));
console.log(SLL1.addFront(2));
console.log(SLL1.display());
console.log(SLL1.addFront(11.41));
console.log(SLL1.display());
