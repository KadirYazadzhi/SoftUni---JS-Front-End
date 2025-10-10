function lockedProfileSolution() {
    Array.from(document.querySelectorAll('.profile button')).forEach(button => {
        button.addEventListener('click', (e) => {
            const profile = e.target.parentElement;
            const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;

            if (!isLocked) {
                const hiddenFields = profile.querySelector('div');
                if (e.target.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    e.target.textContent = 'Show more';
                }
            }
        });
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', lockedProfileSolution);
