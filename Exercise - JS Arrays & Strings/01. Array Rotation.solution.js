function solveSolution(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let first = arr.shift();
        arr.push(first);
    }
    console.log(arr.join(' '));
}

// Example usage:
// solveSolution([51, 47, 32, 61, 21], 2); // Output: 32 61 21 51 47
// solveSolution([32, 21, 61, 1], 4); // Output: 32 21 61 1
