function solve(input) {
    const addressBook = {};

    for (const line of input) {
        const [name, address] = line.split(':');
        addressBook[name] = address;
    }

    const sortedNames = Object.keys(addressBook).sort();

    for (const name of sortedNames) {
        console.log(`${name} -> ${addressBook[name]}`);
    }
}