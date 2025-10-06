function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ul = document.getElementById('commits');
    ul.innerHTML = ''; // Clear previous results

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(data => {
            for (const commit of data) {
                const li = document.createElement('li');
                li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                ul.appendChild(li);
            }
        })
        .catch(error => {
            const li = document.createElement('li');
            li.textContent = `Error: ${error.message}`;
            ul.appendChild(li);
        });
}