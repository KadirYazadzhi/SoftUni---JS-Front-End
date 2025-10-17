function printAndSumSolution(start, end) {
    let sum = 0;
    let output = '';

    for (let i = start; i <= end; i++) {
        output += i + ' ';
        sum += i;
    }

    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}

// Example usage:
// printAndSumSolution(5, 10); // Output: 5 6 7 8 9 10, Sum: 45
// printAndSumSolution(0, 26); // Output: 0 1 2 ... 26, Sum: 351
