function solveSolution(numbers) {
    numbers.sort((a, b) => a - b);
    const result = [];
    while (numbers.length > 0) {
        result.push(numbers.shift());
        if (numbers.length > 0) {
            result.push(numbers.pop());
        }
    }
    return result;
}

// Example usage:
// solveSolution([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]); // Output: [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
