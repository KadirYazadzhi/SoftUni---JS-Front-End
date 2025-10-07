function addItemSolution() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;
    document.getElementById('items').appendChild(li);
    input.value = '';
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('addBtn').addEventListener('click', addItemSolution);
