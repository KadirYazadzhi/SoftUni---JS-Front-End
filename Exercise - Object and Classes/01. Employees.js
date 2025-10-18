function solve(input) {
    const employees = [];

    for (const name of input) {
        const employee = {
            name: name,
            personalNumber: name.length
        };
        employees.push(employee);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}