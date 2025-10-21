// This task requires making HTTP requests, which cannot be directly executed in this environment.
// The task describes how to use Postman to manually perform GET requests to restcountries.com API.
// Therefore, no JavaScript code solution can be provided for direct execution.

// However, I can provide a conceptual JavaScript function that would make such a request
// if executed in a browser environment or Node.js with a suitable HTTP client library.

function getBulgariaInfo() {
    // In a real browser environment, you would use fetch:
    /*
    fetch('https://restcountries.com/v3.1/name/Bulgaria')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    */

    // For filtering specific fields for Italy:
    /*
    fetch('https://restcountries.com/v3.1/name/Italy?fields=name,capital,region,population')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    */

    // For countries using Euro:
    /*
    fetch('https://restcountries.com/v3.1/currency/EUR?fields=name,subregion')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    */

    console.log("This function demonstrates how to make HTTP requests conceptually.");
    console.log("Actual execution requires a browser or Node.js environment with network access.");
}

// Example usage (would run in a compatible environment):
// getBulgariaInfo();
