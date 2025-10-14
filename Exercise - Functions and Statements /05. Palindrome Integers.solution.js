function solveSolution(arr) {
    function isPalindrome(num) {
        const numAsString = num.toString();
        const reversedNumAsString = numAsString.split('').reverse().join('');
        return numAsString === reversedNumAsString;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(isPalindrome(arr[i]));
    }
}

// Example usage:
// solveSolution([123, 323, 421, 121]); // Output: false, true, false, true
// solveSolution([32, 2, 232, 1010]); // Output: false, true, true, false
