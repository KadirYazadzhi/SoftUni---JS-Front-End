function validateSolution() {
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('change', () => {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (regex.test(emailInput.value)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', validateSolution);
