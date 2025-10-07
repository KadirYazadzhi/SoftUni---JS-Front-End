function attachEvents() {
    const locationInput = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const weatherSymbols = {
        Sunny: '&#x2600;', // ☀
        'Partly sunny': '&#x26C5;', // ⛅
        Overcast: '&#x2601;', // ☁
        Rain: '&#x2614;', // ☂
        Degrees: '&#176;' // °
    };

    submitButton.addEventListener('click', () => {
        const locationName = locationInput.value;
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(response => response.json())
            .then(data => {
                const location = data.find(l => l.name === locationName);
                if (!location) {
                    throw new Error("Error");
                }
                const code = location.code;

                Promise.all([
                    fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`).then(res => res.json()),
                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`).then(res => res.json())
                ])
                    .then(([todayData, upcomingData]) => {
                        forecastDiv.style.display = 'block';
                        currentDiv.innerHTML = '';
                        upcomingDiv.innerHTML = '';

                        // Current conditions
                        const currentForecastDiv = document.createElement('div');
                        currentForecastDiv.classList.add('forecasts');

                        const symbolSpan = document.createElement('span');
                        symbolSpan.classList.add('condition');
                        symbolSpan.classList.add('symbol');
                        symbolSpan.innerHTML = weatherSymbols[todayData.forecast.condition];
                        currentForecastDiv.appendChild(symbolSpan);

                        const conditionSpan = document.createElement('span');
                        conditionSpan.classList.add('condition');

                        const locationSpan = document.createElement('span');
                        locationSpan.classList.add('forecast-data');
                        locationSpan.textContent = todayData.name;
                        conditionSpan.appendChild(locationSpan);

                        const degreesSpan = document.createElement('span');
                        degreesSpan.classList.add('forecast-data');
                        degreesSpan.innerHTML = `${todayData.forecast.low}${weatherSymbols.Degrees}/${todayData.forecast.high}${weatherSymbols.Degrees}`;
                        conditionSpan.appendChild(degreesSpan);

                        const weatherSpan = document.createElement('span');
                        weatherSpan.classList.add('forecast-data');
                        weatherSpan.textContent = todayData.forecast.condition;
                        conditionSpan.appendChild(weatherSpan);

                        currentForecastDiv.appendChild(conditionSpan);
                        currentDiv.appendChild(currentForecastDiv);

                        // Upcoming conditions
                        const upcomingForecastInfoDiv = document.createElement('div');
                        upcomingForecastInfoDiv.classList.add('forecast-info');

                        for (const dayForecast of upcomingData.forecast) {
                            const upcomingSpan = document.createElement('span');
                            upcomingSpan.classList.add('upcoming');

                            const upcomingSymbolSpan = document.createElement('span');
                            upcomingSymbolSpan.classList.add('symbol');
                            upcomingSymbolSpan.innerHTML = weatherSymbols[dayForecast.condition];
                            upcomingSpan.appendChild(upcomingSymbolSpan);

                            const upcomingDegreesSpan = document.createElement('span');
                            upcomingDegreesSpan.classList.add('forecast-data');
                            upcomingDegreesSpan.innerHTML = `${dayForecast.low}${weatherSymbols.Degrees}/${dayForecast.high}${weatherSymbols.Degrees}`;
                            upcomingSpan.appendChild(upcomingDegreesSpan);

                            const upcomingWeatherSpan = document.createElement('span');
                            upcomingWeatherSpan.classList.add('forecast-data');
                            upcomingWeatherSpan.textContent = dayForecast.condition;
                            upcomingSpan.appendChild(upcomingWeatherSpan);

                            upcomingForecastInfoDiv.appendChild(upcomingSpan);
                        }
                        upcomingDiv.appendChild(upcomingForecastInfoDiv);
                    })
                    .catch(error => {
                        forecastDiv.style.display = 'block';
                        currentDiv.innerHTML = '<div class="label">Error</div>';
                        upcomingDiv.innerHTML = '';
                    });
            })
            .catch(error => {
                forecastDiv.style.display = 'block';
                currentDiv.innerHTML = '<div class="label">Error</div>';
                upcomingDiv.innerHTML = '';
            });
    });
}