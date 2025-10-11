function solveSolution() {
    const generateButton = document.querySelectorAll('#exercise button')[0];
    const buyButton = document.querySelectorAll('#exercise button')[1];
    const inputTextArea = document.querySelectorAll('#exercise textarea')[0];
    const outputTextArea = document.querySelectorAll('#exercise textarea')[1];
    const tableBody = document.querySelector('.table tbody');

    generateButton.addEventListener('click', () => {
        const furnitureArray = JSON.parse(inputTextArea.value);
        for (const furniture of furnitureArray) {
            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = furniture.img;
            imgCell.appendChild(img);
            row.appendChild(imgCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = furniture.name;
            row.appendChild(nameCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = furniture.price;
            row.appendChild(priceCell);

            const decFactorCell = document.createElement('td');
            decFactorCell.textContent = furniture.decFactor;
            row.appendChild(decFactorCell);

            const markCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            markCell.appendChild(checkbox);
            row.appendChild(markCell);

            tableBody.appendChild(row);
        }
    });

    buyButton.addEventListener('click', () => {
        const checkedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
        const boughtFurniture = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        for (const checkbox of checkedCheckboxes) {
            const row = checkbox.parentElement.parentElement;
            const name = row.children[1].textContent;
            const price = Number(row.children[2].textContent);
            const decFactor = Number(row.children[3].textContent);

            boughtFurniture.push(name);
            totalPrice += price;
            totalDecFactor += decFactor;
        }

        outputTextArea.value += `Bought furniture: ${boughtFurniture.join(', ')}
`;
        outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}
`;
        outputTextArea.value += `Average decoration factor: ${totalDecFactor / boughtFurniture.length}
`;
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', solveSolution);
