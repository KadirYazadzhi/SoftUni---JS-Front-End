function solveSolution(number) {
    const numAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        const digit = Number(numAsString[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// Example usage:
// solveSolution(1000435); // Output: Odd sum = 9, Even sum = 4
// solveSolution(34958921372592); // Output: Odd sum = 31, Even sum = 18
