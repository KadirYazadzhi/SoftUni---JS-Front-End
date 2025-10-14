function solve(password) {
    let isValid = true;
    const errors = [];

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        errors.push("Password must be between 6 and 10 characters");
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        isValid = false;
        errors.push("Password must consist only of letters and digits");
    }

    const digitCount = (password.match(/\d/g) || []).length;
    if (digitCount < 2) {
        isValid = false;
        errors.push("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    } else {
        for (const error of errors) {
            console.log(error);
        }
    }
}