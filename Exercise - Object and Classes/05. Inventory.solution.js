function solveSolution(input) {
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

// Example usage:
// solveSolution([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / Barrel, Spear',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);
// Output:
// Hero: Hes
// level => 1
// Items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// Items => Barrel, Spear
// Hero: Isacc
// level => 25
// Items => Apple, GravityGun
