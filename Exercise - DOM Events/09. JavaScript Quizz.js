function solve() {
    const sections = Array.from(document.querySelectorAll('section'));
    const resultsUl = document.getElementById('results');
    const resultH1 = resultsUl.querySelector('h1');

    let correctAnswers = 0;
    let currentSectionIndex = 0;

    const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

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