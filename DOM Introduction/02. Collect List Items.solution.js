function extractTextSolution() {
    const listItems = Array.from(document.querySelectorAll('#items li'));
    const textarea = document.getElementById('result');
    textarea.value = listItems.map(li => li.textContent).join('\n');
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('extractBtn').addEventListener('click', extractTextSolution);

