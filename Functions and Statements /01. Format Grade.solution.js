function solveSolution(grade) {
    if (grade < 3.00) {
        console.log("Fail (2)");
    }
    else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    }
    else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    }
    else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

// Example usage:
// solveSolution(3.33); // Output: Poor (3.33)
// solveSolution(4.50); // Output: Very good (4.50)
// solveSolution(2.99); // Output: Fail (2)
