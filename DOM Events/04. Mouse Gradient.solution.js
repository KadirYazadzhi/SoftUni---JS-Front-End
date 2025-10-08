function attachGradientEventsSolution() {
    const gradient = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        const width = e.target.clientWidth;
        const x = e.offsetX;
        const percent = Math.floor((x / width) * 100);
        resultDiv.textContent = `${percent}%`;
    });

    gradient.addEventListener('mouseout', () => {
        resultDiv.textContent = '';
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', attachGradientEventsSolution);
