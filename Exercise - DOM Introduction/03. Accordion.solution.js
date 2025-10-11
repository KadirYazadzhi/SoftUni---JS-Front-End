function toggleSolution() {
    const extraDiv = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];

    if (button.textContent === 'More') {
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementsByClassName('button')[0].addEventListener('click', toggleSolution);
