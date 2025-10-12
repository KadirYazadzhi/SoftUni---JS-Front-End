function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const input = JSON.parse(document.querySelector('#inputs textarea').value);
        const restaurants = {};

        for (const line of input) {
            const [restaurantName, workersString] = line.split(' - ');
            const workers = workersString.split(', ').map(w => {
                const [name, salary] = w.split(' ');
                return { name, salary: Number(salary) };
            });

            if (!restaurants.hasOwnProperty(restaurantName)) {
                restaurants[restaurantName] = { workers: [], avgSalary: 0, bestSalary: 0 };
            }

            restaurants[restaurantName].workers.push(...workers);
            updateRestaurantData(restaurants[restaurantName]);
        }

        let bestRestaurant = null;
        let maxAvgSalary = 0;

        for (const name in restaurants) {
            if (restaurants[name].avgSalary > maxAvgSalary) {
                maxAvgSalary = restaurants[name].avgSalary;
                bestRestaurant = { name, ...restaurants[name] };
            }
        }

        document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

        const sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
        let workersOutput = '';
        for (const worker of sortedWorkers) {
            workersOutput += `Name: ${worker.name} With Salary: ${worker.salary} `;
        }
        document.querySelector('#workers p').textContent = workersOutput.trim();
    }

    function updateRestaurantData(restaurant) {
        let totalSalary = 0;
        let bestSalary = 0;
        for (const worker of restaurant.workers) {
            totalSalary += worker.salary;
            if (worker.salary > bestSalary) {
                bestSalary = worker.salary;
            }
        }
        restaurant.avgSalary = totalSalary / restaurant.workers.length;
        restaurant.bestSalary = bestSalary;
    }
}