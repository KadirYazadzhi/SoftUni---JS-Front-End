function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const convertButton = document.getElementById('convert');

    const units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertButton.addEventListener('click', () => {
        const value = Number(inputDistance.value);
        const fromUnit = inputUnits.value;
        const toUnit = outputUnits.value;

        const valueInMeters = value * units[fromUnit];
        const convertedValue = valueInMeters / units[toUnit];

        outputDistance.value = convertedValue;
    });
}