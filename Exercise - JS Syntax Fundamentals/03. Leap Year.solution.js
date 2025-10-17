function solveSolution(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

// Example usage:
// solveSolution(2024); // Output: yes
// solveSolution(1900); // Output: no
// solveSolution(2000); // Output: yes
