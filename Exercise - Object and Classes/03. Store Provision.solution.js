function solveSolution(currentStock, orderedProducts) {
    const store = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        const quantity = Number(currentStock[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        const product = orderedProducts[i];
        const quantity = Number(orderedProducts[i + 1]);
        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

// Example usage:
// solveSolution(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70']
// );
// Output:
// Chips -> 5
// CocaCola -> 9
// Bananas -> 14
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70
