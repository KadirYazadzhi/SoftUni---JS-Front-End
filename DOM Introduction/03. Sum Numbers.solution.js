function calcSolution() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    document.getElementById('sum').value = num1 + num2;
}

// This function is intended to be called when a button is clicked or similar event.
// Example: document.getElementById('calculateBtn').addEventListener('click', calcSolution);
