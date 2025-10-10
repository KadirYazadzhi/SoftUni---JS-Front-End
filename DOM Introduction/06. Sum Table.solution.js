function sumTableSolution() {
    const rows = Array.from(document.querySelectorAll('table tr'));
    let sum = 0;
    // Start from 1 to skip the header row, and go up to rows.length - 1 to skip the footer row
    for (let i = 1; i < rows.length - 1; i++) {
        const cost = Number(rows[i].lastElementChild.textContent);
        sum += cost;
    }
    document.getElementById('sum').textContent = sum;
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('sumBtn').addEventListener('click', sumTableSolution);
