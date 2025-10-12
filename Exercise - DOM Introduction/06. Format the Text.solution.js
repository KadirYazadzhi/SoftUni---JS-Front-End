function solveSolution() {
    const textInput = document.getElementById('input').value;
    const outputDiv = document.getElementById('output');

    const sentences = textInput.split('.').filter(s => s.length > 0).map(s => s.trim());

    outputDiv.innerHTML = '';

    for (let i = 0; i < sentences.length; i += 3) {
        const paragraphSentences = sentences.slice(i, i + 3);
        const paragraph = document.createElement('p');
        paragraph.textContent = paragraphSentences.join('. ') + '.';
        outputDiv.appendChild(paragraph);
    }
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('formatBtn').addEventListener('click', solveSolution);
