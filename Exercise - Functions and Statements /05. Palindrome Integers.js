function solve(arr) {
    function isPalindrome(num) {
        const numAsString = num.toString();
        const reversedNumAsString = numAsString.split('').reverse().join('');
        return numAsString === reversedNumAsString;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(isPalindrome(arr[i]));
    }
}