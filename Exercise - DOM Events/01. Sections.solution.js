function solveSolution() {
    const input = document.getElementById('sectionsInput').value;
    const contentDiv = document.getElementById('content');

    const sections = input.split(', ');

    for (const sectionText of sections) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = sectionText;
        p.style.display = 'none';
        div.appendChild(p);

        div.addEventListener('click', () => {
            p.style.display = 'block';
        });

        contentDiv.appendChild(div);
    }
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', solveSolution);
