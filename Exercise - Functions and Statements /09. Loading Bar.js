function solve(number) {
    if (number === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        const percent = number / 10;
        const dots = 10 - percent;
        console.log(`${number}% [${'%'.repeat(percent)}${'.'.repeat(dots)}]`);
        console.log("Still loading...");
    }
}