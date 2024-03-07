let screenValue = '';

function addToScreen(value) {
    screenValue += value;
    updateScreen();
}

function clearScreen() {
    screenValue = '';
    updateScreen();
}

function calculate() {
    try {
        const result = eval(screenValue);
        screenValue = result.toString();
        updateScreen();
    } catch (error) {
        screenValue = 'Error';
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById('screen').innerText = screenValue;
}
