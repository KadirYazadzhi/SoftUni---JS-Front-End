function solveSolution(text) {
    const words = text.split(/(?=[A-Z])/);
    console.log(words.join(', '));
}

// Example usage:
// solveSolution('SplitMeIfYouCanHaHaYouCantOrYouCan'); // Output: Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
