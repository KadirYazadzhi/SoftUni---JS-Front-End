function focusedSolution() {
    Array.from(document.querySelectorAll('input[type="text"]')).forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', focusedSolution);
