// O(1) – Constant Time
let arr = [10, 20, 30];
//Accessing an element from an array by its index
console.log(arr[1]);  // O(1)

//O(n) – Linear Time
let array = [10, 20, 30, 40];
// Looping through all elements of an array
array.forEach(item => console.log(item));  // O(n)

//O(n²) – Quadratic Time 
let arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        console.log(arr1[i], arr1[j]);  // O(n²)
    }
}

