class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create nodes
let node1 = new Node(10);
let node2 = new Node(20);

// Linking nodes
node1.next = node2;
console.log(node1);  

//Traversing Link list

let head = node1;  
while (head !== null) {
    console.log(head.data);  
    head = head.next;  // Move to the next node
}


