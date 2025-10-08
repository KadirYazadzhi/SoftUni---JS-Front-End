function editSolution(element, match, replacer) {
    const text = element.textContent;
    const newText = text.replace(new RegExp(match, 'g'), replacer);
    element.textContent = newText;
}

// This function is intended to be called with a DOM element, a string to match, and a string to replace with.
// Example: const myElement = document.getElementById('myParagraph');
// editSolution(myElement, 'oldText', 'newText');
