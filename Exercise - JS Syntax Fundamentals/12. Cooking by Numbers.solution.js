function solveSolution(number, ...commands) {
    let num = Number(number);

    for (const command of commands) {
        switch (command) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.80;
                break;
        }
        console.log(num);
    }
}

// Example usage:
// solveSolution('32', 'chop', 'chop', 'chop', 'chop', 'chop'); // Output: 16, 8, 4, 2, 1
// solveSolution('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); // Output: 3, 4, 2, 6, 4.8
