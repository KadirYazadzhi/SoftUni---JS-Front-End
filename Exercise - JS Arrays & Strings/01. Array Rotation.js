function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let first = arr.shift();
        arr.push(first);
    }
    console.log(arr.join(' '));
}