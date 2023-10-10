function convert(unit) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (unit === 'celsius') {
        if (!isNaN(celsiusValue)) {
            fahrenheitValue = (celsiusValue * 9/5) + 32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        }
    } else if (unit === 'fahrenheit') {
        if (!isNaN(fahrenheitValue)) {
            celsiusValue = (fahrenheitValue - 32) * 5/9;
            celsiusInput.value = celsiusValue.toFixed(2);
        }
    }
}
