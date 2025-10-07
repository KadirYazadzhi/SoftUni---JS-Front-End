function addItemSolution() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    li.appendChild(deleteLink);
    document.getElementById('items').appendChild(li);
    input.value = '';
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('addBtn').addEventListener('click', addItemSolution);
