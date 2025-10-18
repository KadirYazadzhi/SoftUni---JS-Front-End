function solve(number) {
    let numAsString = number.toString();
    let firstDigit = numAsString[0];
    let areSame = true;
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== firstDigit) {
            areSame = false;
        }
        sum += Number(numAsString[i]);
    }
    console.log(areSame);
    console.log(sum);
}