function subtractSolution() {
    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = (firstNumber - secondNumber);
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('subtractBtn').addEventListener('click', subtractSolution);
