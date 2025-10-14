function solveSolution(number) {
    if (number === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        const percentSigns = '%'.repeat(number / 10);
        const dots = '.'.repeat(10 - (number / 10));
        console.log(`${number}% [${percentSigns}${dots}]`);
        console.log("Still loading...");
    }
}

// Example usage:
// solveSolution(30); // Output: 30% [%%%.......], Still loading...
// solveSolution(50); // Output: 50% [%%%%%.....], Still loading...
// solveSolution(100); // Output: 100% Complete!, [%%%%%%%%%%]
