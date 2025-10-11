function search() {
    const searchText = document.getElementById('searchText').value;
    const towns = Array.from(document.querySelectorAll('#towns li'));
    let matches = 0;

    for (const town of towns) {
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';
    }

    for (const town of towns) {
        if (town.textContent.includes(searchText)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        }
    }

    document.getElementById('result').textContent = `${matches} matches found`;
}