function solveSolution() {
    const sections = Array.from(document.querySelectorAll('section'));
    const resultsUl = document.getElementById('results');
    const resultH1 = resultsUl.querySelector('h1');

    let correctAnswers = 0;
    let currentSectionIndex = 0;

    const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

    // Hide all sections except the first one initially
    sections.forEach((section, index) => {
        if (index > 0) {
            section.style.display = 'none';
        }
    });

    for (const section of sections) {
        section.addEventListener('click', (e) => {
            if (e.target.tagName === 'P') {
                const answer = e.target.textContent;
                if (rightAnswers.includes(answer)) {
                    correctAnswers++;
                }

                sections[currentSectionIndex].style.display = 'none';
                currentSectionIndex++;

                if (currentSectionIndex < sections.length) {
                    sections[currentSectionIndex].style.display = 'block';
                } else {
                    resultsUl.style.display = 'block';
                    if (correctAnswers === rightAnswers.length) {
                        resultH1.textContent = 'You are recognized as top JavaScript fan!';
                    } else {
                        resultH1.textContent = `You have ${correctAnswers} right answers`;
                    }
                }
            }
        });
    }
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', solveSolution);
