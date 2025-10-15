function solveSolution(arr, step) {
    let result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    return result;
}

// Example usage:
// solveSolution(['5', '20', '31', '4', '20'], 2); // Output: ['5', '31', '20']
// solveSolution(['dsa', 'asd', 'test', 'tset'], 2); // Output: ['dsa', 'test']
