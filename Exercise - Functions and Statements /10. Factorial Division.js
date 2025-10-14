function solve(num1, num2) {
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const fact1 = factorial(num1);
    const fact2 = factorial(num2);

    const division = fact1 / fact2;
    console.log(division.toFixed(2));
}