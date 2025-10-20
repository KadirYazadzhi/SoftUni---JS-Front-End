function solve(input) {
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