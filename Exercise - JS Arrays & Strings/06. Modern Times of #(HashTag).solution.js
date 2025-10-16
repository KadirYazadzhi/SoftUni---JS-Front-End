function solveSolution(text) {
    const words = text.split(' ');
    for (const word of words) {
        if (word.startsWith('#') && word.length > 1) {
            const specialWord = word.substring(1);
            if (/^[A-Za-z]+$/.test(specialWord)) {
                console.log(specialWord);
            }
        }
    }
}

// Example usage:
// solveSolution('Nowadays everyone uses #hashtags to tag a #special word in #socialMedia');
// Output: hashtags, special, socialMedia
