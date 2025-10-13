function solveSolution() {
    const numberInput = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const resultInput = document.getElementById('result');

    // Add options to selectMenuTo
    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(hexadecimalOption);

    document.querySelector('button').addEventListener('click', () => {
        const number = Number(numberInput.value);
        const selectedOption = selectMenuTo.value;
        let result = '';

        if (selectedOption === 'binary') {
            result = number.toString(2);
        } else if (selectedOption === 'hexadecimal') {
            result = number.toString(16).toUpperCase();
        }

        resultInput.value = result;
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', solveSolution);
