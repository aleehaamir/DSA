let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // Access element by index

fruits.push('grape');  
console.log(fruits);   

fruits.pop();  
console.log(fruits);   

//Iterating Over Array
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);
console.log(squares);  


let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  

