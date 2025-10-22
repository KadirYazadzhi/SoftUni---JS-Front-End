function solve(n, inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }
    let reversedArr = arr.reverse();
    console.log(reversedArr.join(' '));
}