function solve(jsonStr) {
    const obj = JSON.parse(jsonStr);
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}