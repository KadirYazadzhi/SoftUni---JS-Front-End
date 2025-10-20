class VehicleSolution {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

// Example usage:
// let parts = { engine: 6, power: 100 };
// let vehicle = new VehicleSolution('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel); // Output: 100
// console.log(vehicle.parts.quality); // Output: 600
