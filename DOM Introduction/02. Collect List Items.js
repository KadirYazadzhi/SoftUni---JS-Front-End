function extractText() {
    const listItems = Array.from(document.querySelectorAll('#items li'));
    const textarea = document.getElementById('result');
    let result = '';

    for (const item of listItems) {
        result += item.textContent + '\n';
    }

    textarea.value = result.trim();
}