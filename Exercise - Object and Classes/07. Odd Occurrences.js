function solve(input) {
    const words = input.toLowerCase().split(' ');
    const wordCounts = {};

    for (const word of words) {
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    const oddOccurrences = [];
    for (const word in wordCounts) {
        if (wordCounts[word] % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }

    console.log(oddOccurrences.join(' '));
}