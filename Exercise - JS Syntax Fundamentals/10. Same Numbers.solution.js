function solveSolution(number) {
    let numAsString = number.toString();
    let firstDigit = numAsString[0];
    let areSame = true;
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== firstDigit) {
            areSame = false;
        }
        sum += Number(numAsString[i]);
    }
    console.log(areSame);
    console.log(sum);
}

// Example usage:
// solveSolution(2222222); // Output: true, 14
// solveSolution(1234); // Output: false, 10
