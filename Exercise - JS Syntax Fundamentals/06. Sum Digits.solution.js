function solveSolution(number) {
    let sum = 0;
    let numAsString = number.toString();
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);
}

// Example usage:
// solveSolution(245678); // Output: 32
// solveSolution(97561); // Output: 28
