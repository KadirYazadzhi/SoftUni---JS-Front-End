function solve(input) {
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