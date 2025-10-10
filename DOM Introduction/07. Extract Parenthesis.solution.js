function extractSolution(elementId) {
    const text = document.getElementById(elementId).textContent;
    const regex = /\(([^)]*)\)/g;
    let matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        matches.push(match[1]);
    }
    return matches.join('; ');
}

// This function is intended to be called with the ID of a DOM element.
// Example: const extractedText = extractSolution('content');
// console.log(extractedText);
