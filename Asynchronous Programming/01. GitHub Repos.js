function loadRepos() {
    const username = document.getElementById('username').value;
    const ul = document.getElementById('repos');
    ul.innerHTML = ''; // Clear previous results

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
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
            const li = document.createElement('li');
            li.textContent = `Error: ${error.message}`;
            ul.appendChild(li);
        });
}