function colorizeRowsSolution() {
    const rows = Array.from(document.querySelectorAll('table tr'));
    for (let i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].style.backgroundColor = 'Teal';
        }
    }
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('colorizeBtn').addEventListener('click', colorizeRowsSolution);
