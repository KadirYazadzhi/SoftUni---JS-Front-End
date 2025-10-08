function focused() {
    Array.from(document.querySelectorAll('input[type="text"]')).forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    });
}