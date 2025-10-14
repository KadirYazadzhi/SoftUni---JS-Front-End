function solveSolution(number) {
    if (number <= 0) {
        console.log("It's not so perfect.");
        return;
    }

    let sumOfDivisors = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
            if (i !== number / i) {
                sumOfDivisors += number / i;
            }
        }
    }

    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

// Example usage:
// solveSolution(6); // Output: We have a perfect number!
// solveSolution(28); // Output: We have a perfect number!
// solveSolution(12); // Output: It's not so perfect.
