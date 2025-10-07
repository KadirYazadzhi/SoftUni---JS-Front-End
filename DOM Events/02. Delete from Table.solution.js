function deleteByEmailSolution() {
    const emailInput = document.querySelector('label input[type="text"]');
    const resultDiv = document.getElementById('result');
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

    let isDeleted = false;
    for (const row of tableRows) {
        if (row.children[1].textContent === emailInput.value) {
            row.remove();
            isDeleted = true;
            break;
        }
    }

    if (isDeleted) {
        resultDiv.textContent = 'Deleted.';
    } else {
        resultDiv.textContent = 'Not found.';
    }

    emailInput.value = '';
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('deleteBtn').addEventListener('click', deleteByEmailSolution);
