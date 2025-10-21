function solveSolution(product, quantity) {
    let price = 0;
    switch (product) {
        case "coffee":
            price = 1.50;
            break;
        case "water":
            price = 1.00;
            break;
        case "coke":
            price = 1.40;
            break;
        case "snacks":
            price = 2.00;
            break;
    }
    console.log((price * quantity).toFixed(2));
}

// Example usage:
// solveSolution('water', 5); // Output: 5.00
// solveSolution('coffee', 2); // Output: 3.00
