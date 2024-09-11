let stack = [];

// Adding items 
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);  

// Removing the top 
let lastItem = stack.pop();
console.log(lastItem); 
console.log(stack);  


//Queue
let queue = [];

// enqueue
queue.push(10);
queue.push(20);
queue.push(30);

console.log(queue); 

// dequeue
let firstItem = queue.shift();
console.log(firstItem);  
console.log(queue);  

