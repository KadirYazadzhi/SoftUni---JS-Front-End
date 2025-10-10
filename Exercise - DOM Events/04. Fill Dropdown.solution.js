function addItemSolution() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = newItemText.value;
    option.value = newItemValue.value;

    menu.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('addBtn').addEventListener('click', addItemSolution);
