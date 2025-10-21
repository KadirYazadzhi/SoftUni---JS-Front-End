function solveSolution(string, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += string;
    }
    return result;
}

// Example usage:
// console.log(solveSolution('abc', 3)); // Output: abcabcabc
// console.log(solveSolution('String', 2)); // Output: StringString
