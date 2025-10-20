function solve(input) {
    const dictionary = {};

    for (const line of input) {
        const obj = JSON.parse(line);
        const term = Object.keys(obj)[0];
        const definition = obj[term];
        dictionary[term] = definition;
    }

    const sortedTerms = Object.keys(dictionary).sort();

    for (const term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}