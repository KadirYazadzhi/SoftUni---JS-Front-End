function solve(input) {
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