function solveSolution() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchInput = document.getElementById('searchField');
        const searchText = searchInput.value.toLowerCase();
        const tableRows = Array.from(document.querySelectorAll('tbody tr'));

        for (const row of tableRows) {
            row.classList.remove('select');
        }

        for (const row of tableRows) {
            if (row.textContent.toLowerCase().includes(searchText)) {
                row.classList.add('select');
            }
        }

        searchInput.value = '';
    }
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', solveSolution);
