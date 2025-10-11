function solveSolution() {
    const table = document.querySelector('table');
    const cells = Array.from(document.querySelectorAll('tbody td input'));
    const checkButton = document.querySelectorAll('button')[0];
    const clearButton = document.querySelectorAll('button')[1];
    const checkParagraph = document.querySelector('#check p');

    checkButton.addEventListener('click', () => {
        const matrix = [];
        for (let i = 0; i < 3; i++) {
            matrix.push([]);
            for (let j = 0; j < 3; j++) {
                matrix[i].push(Number(cells[i * 3 + j].value));
            }
        }

        let isSudoku = true;
        for (let i = 0; i < 3; i++) {
            const row = new Set();
            const col = new Set();
            for (let j = 0; j < 3; j++) {
                row.add(matrix[i][j]);
                col.add(matrix[j][i]);
            }
            if (row.size !== 3 || col.size !== 3) {
                isSudoku = false;
                break;
            }
        }

        if (isSudoku) {
            table.style.border = '2px solid green';
            checkParagraph.style.color = 'green';
            checkParagraph.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkParagraph.style.color = 'red';
            checkParagraph.textContent = 'Wrong solution! Try again!';
        }
    });

    clearButton.addEventListener('click', () => {
        for (const cell of cells) {
            cell.value = '';
        }
        table.style.border = 'none';
        checkParagraph.textContent = '';
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', solveSolution);
