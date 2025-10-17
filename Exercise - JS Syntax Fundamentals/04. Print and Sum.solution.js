function solveSolution(start, end) {
    let sum = 0;
    let numbers = "";
    for (let i = start; i <= end; i++) {
        sum += i;
        numbers += i + " ";
    }
    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}

// Example usage:
// solveSolution(5, 10); // Output: 5 6 7 8 9 10, Sum: 45
// solveSolution(0, 26); // Output: 0 1 2 ... 26, Sum: 351
