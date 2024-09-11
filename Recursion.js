function factorial(n) {
    if (n === 0) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}

console.log(factorial(5));  // Output: 120


//fibonacci

function fibonacci(n) {
    if (n <= 1) return n;  // Base case
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
}

console.log(fibonacci(6));  // Output: 8
