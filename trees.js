class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;  
        this.right = null;  
    }
}

let root = new TreeNode('A');   // Root node
root.left = new TreeNode('B');  // Left child of A
root.right = new TreeNode('C'); // Right child of A

root.left.left = new TreeNode('D');  // Left child of B
root.left.right = new TreeNode('E'); // Right child of B

root.right.right = new TreeNode('F'); // Right child of C

//preorder
function preorderTraversal(node) {
    if (node === null) return;
    console.log(node.value);  // Visit the root
    preorderTraversal(node.left);  // Traverse the left subtree
    preorderTraversal(node.right);  // Traverse the right subtree
}

// Call the function on the root node
preorderTraversal(root);

//postorder
function postorderTraversal(node) {
    if (node === null) return;
    postorderTraversal(node.left); 
    postorderTraversal(node.right);  
    console.log(node.value);  // Visit the root
}

postorderTraversal(root);


//Inorder
function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);  // Traverse the left subtree
    console.log(node.value);  // Visit the root
    inorderTraversal(node.right);  // Traverse the right subtree
}

inorderTraversal(root);
// Output: D B E A C F










function traverseDOM(node) {
    console.log(node.nodeName);  // Print the current node
    node.childNodes.forEach(child => traverseDOM(child));  // Recursively traverse child nodes
}

// Example of using the function on document body
traverseDOM(document.body);


// Selecting an element and adding a new child
let parentDiv = document.getElementById("parent");
let newChild = document.createElement("div");
newChild.textContent = "New Child";
parentDiv.appendChild(newChild);  // Adds newChild to the DOM under parentDiv
