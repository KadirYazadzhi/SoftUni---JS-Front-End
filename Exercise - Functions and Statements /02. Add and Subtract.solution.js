function solveSolution(a, b, c) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    const result = subtract(sum(a, b), c);
    console.log(result);
}

// Example usage:
// solveSolution(23, 6, 10); // Output: 19
// solveSolution(1, 17, 30); // Output: -12
