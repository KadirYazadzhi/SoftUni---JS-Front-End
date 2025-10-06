function getInfo() {
    const stopIdInput = document.getElementById('stopId');
    const stopNameDiv = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');
    busesUl.innerHTML = ''; // Clear previous results

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopIdInput.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error");
            }
            return response.json();
        })
        .then(data => {
            stopNameDiv.textContent = data.name;
            for (const busId in data.buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                busesUl.appendChild(li);
            }
        })
        .catch(error => {
            stopNameDiv.textContent = error.message;
        });
}