function solveSolution(words, text) {
    const wordsArr = words.split(', ');
    const textArr = text.split(' ');

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].includes('*')) {
            const templateLength = textArr[i].length;
            for (const word of wordsArr) {
                if (word.length === templateLength) {
                    textArr[i] = word;
                    break;
                }
            }
        }
    }

    console.log(textArr.join(' '));
}

// Example usage:
// solveSolution('great, learning', 'softuni is ***** place for ******** new programming languages');
// Output: softuni is great place for learning new programming languages
