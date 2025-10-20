function solveSolution(input) {
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

// Example usage:
// solveSolution([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving a regular route."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]);
// Output:
// Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
// Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving a regular route.
// Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (beans) of a tropical shrub.
// Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
// Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.
