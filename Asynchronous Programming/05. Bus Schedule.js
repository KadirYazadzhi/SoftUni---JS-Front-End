function solve() {
    const infoSpan = document.querySelector('#info span');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let currentStopId = 'depot';
    let nextStopName = '';

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error");
                }
                return response.json();
            })
            .then(data => {
                nextStopName = data.name;
                infoSpan.textContent = `Next stop ${nextStopName}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
                currentStopId = data.next;
            })
            .catch(error => {
                infoSpan.textContent = error.message;
                departButton.disabled = true;
                arriveButton.disabled = true;
            });
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${nextStopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return { depart, arrive };
}