function solveSolution(input) {
    const wordsToTrack = input[0].split(' ');
    const wordCounts = {};

    for (const word of wordsToTrack) {
        wordCounts[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        const currentWord = input[i];
        if (wordCounts.hasOwnProperty(currentWord)) {
            wordCounts[currentWord]++;
        }
    }

    const sortedWords = Object.entries(wordCounts).sort(([, countA], [, countB]) => countB - countA);

    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

// Example usage:
// solveSolution([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
//     'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);
// Output:
// this - 3
// sentence - 2
