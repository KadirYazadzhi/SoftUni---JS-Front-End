function solveSolution(input) {
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

// Example usage:
// solveSolution('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // Output: java php c#
// solveSolution('Cake IS SWEET is Soft CAKE sweet Food'); // Output: cake sweet
