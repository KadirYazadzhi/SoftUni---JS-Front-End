function solveSolution(input) {
    const towns = [];

    for (const line of input) {
        const [townName, latitude, longitude] = line.split(' | ');
        const town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        towns.push(town);
    }

    for (const town of towns) {
        console.log(town);
    }
}

// Example usage:
// solveSolution([
//     'Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625'
// ]);
// Output:
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
