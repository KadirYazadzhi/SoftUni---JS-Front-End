function solve(input) {
    const phoneBook = {};

    for (const line of input) {
        const [name, number] = line.split(' ');
        phoneBook[name] = number;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}