function solveSolution(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let money = weightInKg * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

// Example usage:
// solveSolution('orange', 1560, 2.35); // Output: I need $3.66 to buy 1.56 kilograms orange.
// solveSolution('apple', 1800, 1.50); // Output: I need $2.70 to buy 1.80 kilograms apple.
