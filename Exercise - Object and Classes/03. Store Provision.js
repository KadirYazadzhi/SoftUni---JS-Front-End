function solve(currentStock, orderedProducts) {
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