function solveSolution(char1, char2) {
    const code1 = char1.charCodeAt(0);
    const code2 = char2.charCodeAt(0);

    const start = Math.min(code1, code2);
    const end = Math.max(code1, code2);

    let result = '';
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result.trim());
}

// Example usage:
// solveSolution('a', 'd'); // Output: b c
// solveSolution('C', '#'); // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
