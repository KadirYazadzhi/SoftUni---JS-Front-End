function loadCommitsSolution() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ul = document.getElementById('commits');
    ul.innerHTML = ''; // Clear previous results

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response => {
            if (!response.ok) {
                // Handle HTTP errors
                throw new Error(`${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(data => {
            // Iterate over the fetched commits and display them
            for (const commit of data) {
                const li = document.createElement('li');
                li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
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
// Example: document.getElementById('loadCommitsBtn').addEventListener('click', loadCommitsSolution);
