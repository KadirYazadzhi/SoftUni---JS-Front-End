function solveSolution(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' ';
        }
        console.log(row.trim());
    }
}

// Example usage:
// solveSolution(3); // Output:
// 3 3 3
// 3 3 3
// 3 3 3
// solveSolution(7); // Output:
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// ... (7 rows total)
