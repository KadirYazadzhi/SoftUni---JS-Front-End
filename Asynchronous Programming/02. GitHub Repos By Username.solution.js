function loadReposByUsernameSolution() {
    const username = document.getElementById('username').value;
    const ul = document.getElementById('repos');
    ul.innerHTML = ''; // Clear previous results

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (!response.ok) {
                // Handle HTTP errors
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Iterate over the fetched repositories and display them
            for (const repo of data) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = repo.html_url;
                a.textContent = repo.full_name;
                li.appendChild(a);
                ul.appendChild(li);
            }
        })
        .catch(error => {
            // Display any errors that occur during the fetch operation
            const li = document.createElement('li');
            li.textContent = `Error: ${error.message}`;
            ul.appendChild(li);
        });
}

// This function is intended to be called when a button is clicked or similar event.
// For demonstration purposes, you might call it directly or attach it to an event listener.
// Example: document.getElementById('loadReposBtn').addEventListener('click', loadReposByUsernameSolution);
