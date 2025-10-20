function solve(input) {
    const heroes = [];

    for (const line of input) {
        const [name, level, itemsString] = line.split(' / ');
        const items = itemsString ? itemsString.split(', ') : [];
        heroes.push({ name, level: Number(level), items });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items.join(', ')}`);
    }
}