function solveSolution() {
    const text = document.getElementById('text').value.toLowerCase();
    const namingConvention = document.getElementById('naming-convention').value;
    let result = '';

    if (namingConvention === 'Camel Case') {
        result = text.split(' ').map((word, index) => {
            if (index === 0) {
                return word;
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        }).join('');
    } else if (namingConvention === 'Pascal Case') {
        result = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    } else {
        result = 'Error!';
    }

    document.getElementById('result').textContent = result;
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('convertBtn').addEventListener('click', solveSolution);
