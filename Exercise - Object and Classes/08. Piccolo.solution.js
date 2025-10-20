function solveSolution(input) {
    const parking = new Set();

    for (const line of input) {
        const [direction, carNumber] = line.split(', ');
        if (direction === "IN") {
            parking.add(carNumber);
        } else if (direction === "OUT") {
            parking.delete(carNumber);
        }
    }

    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        const sortedCarNumbers = Array.from(parking).sort();
        for (const carNumber of sortedCarNumbers) {
            console.log(carNumber);
        }
    }
}

// Example usage:
// solveSolution([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);
// Output:
// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT
