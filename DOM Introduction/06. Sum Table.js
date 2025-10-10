function sumTable() {
    const rows = Array.from(document.querySelectorAll('table tr'));
    let sum = 0;
    for (let i = 1; i < rows.length - 1; i++) {
        const cost = Number(rows[i].lastElementChild.textContent);
        sum += cost;
    }
    document.getElementById('sum').textContent = sum;
}