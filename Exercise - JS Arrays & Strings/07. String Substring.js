function solve(word, text) {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    const wordsInText = lowerCaseText.split(' ');

    if (wordsInText.includes(lowerCaseWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}