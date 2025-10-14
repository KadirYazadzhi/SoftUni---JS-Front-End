function solveSolution(num1, num2) {
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const fact1 = factorial(num1);
    const fact2 = factorial(num2);

    const division = fact1 / fact2;
    console.log(division.toFixed(2));
}

// Example usage:
// solveSolution(5, 2); // Output: 60.00
// solveSolution(6, 2); // Output: 360.00
