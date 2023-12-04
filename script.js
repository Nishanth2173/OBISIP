function convert(targetUnit) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (targetUnit === 'celsius' && !isNaN(fahrenheitValue)) {
        const convertedValue = (fahrenheitValue - 32) * (5 / 9);
        celsiusInput.value = convertedValue.toFixed(2);
    } else if (targetUnit === 'fahrenheit' && !isNaN(celsiusValue)) {
        const convertedValue = (celsiusValue * 9 / 5) + 32;
        fahrenheitInput.value = convertedValue.toFixed(2);
    } else {
        alert('Please enter a valid temperature value.');
    }
}
