function extract(elementId) {
    const text = document.getElementById(elementId).textContent;
    const regex = /\(([^)]*)\)/g;
    let matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        matches.push(match[1]);
    }
    return matches.join('; ');
}