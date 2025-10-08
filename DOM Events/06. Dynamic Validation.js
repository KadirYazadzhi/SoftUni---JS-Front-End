function validate() {
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