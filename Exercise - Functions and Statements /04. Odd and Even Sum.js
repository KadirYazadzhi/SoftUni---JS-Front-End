function solve(number) {
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