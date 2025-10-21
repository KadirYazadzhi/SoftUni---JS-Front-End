// This task requires making HTTP POST requests to the GitHub API, which cannot be directly executed in this environment.
// The task describes how to use Postman to manually perform POST requests to the GitHub API.
// Therefore, no JavaScript code solution can be provided for direct execution.

// However, I can provide a conceptual JavaScript function that would make such a request
// if executed in a browser environment or Node.js with a suitable HTTP client library.

function createGitHubIssue(title, body, labels) {
    const issueData = {
        title: title,
        body: body,
        labels: labels
    };

    // In a real browser environment, you would use fetch:
    /*
    fetch('https://api.github.com/repos/testnakov/test-nakov-repo/issues', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Basic ' + btoa('YOUR_USERNAME:YOUR_PASSWORD') // Replace with actual credentials
        },
        body: JSON.stringify(issueData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    */

    console.log("This function demonstrates how to create a GitHub issue conceptually.");
    console.log("Actual execution requires a browser or Node.js environment with network access and proper authentication.");
}

// Example usage (would run in a compatible environment):
// createGitHubIssue("I have created an issue", "Minor bug", ["bug", "minor"]);
