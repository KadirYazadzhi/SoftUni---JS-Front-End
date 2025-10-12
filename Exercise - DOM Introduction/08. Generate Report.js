function solve() {
    const checkboxes = Array.from(document.querySelectorAll('thead input[type="checkbox"]'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const outputTextarea = document.getElementById('output');

    document.querySelector('#generateReport').addEventListener('click', () => {
        const selectedColumns = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                selectedColumns.push({ index: i, name: checkboxes[i].name });
            }
        }

        const report = [];
        for (const row of rows) {
            const obj = {};
            const cells = Array.from(row.querySelectorAll('td'));
            for (const col of selectedColumns) {
                obj[col.name] = cells[col.index].textContent;
            }
            report.push(obj);
        }

        outputTextarea.value = JSON.stringify(report, null, 2);
    });
}