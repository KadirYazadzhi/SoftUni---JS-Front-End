function solveSolution(word, text) {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    const wordsInText = lowerCaseText.split(' ');

    if (wordsInText.includes(lowerCaseWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

// Example usage:
// solveSolution('javascript', 'JavaScript is the best programming language'); // Output: javascript
// solveSolution('python', 'JavaScript is the best programming language'); // Output: python not found!
