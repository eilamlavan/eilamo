let count = 0;
const counterDisplay = document.getElementById('counter');

function updateDisplay() {
    counterDisplay.textContent = count;
    // Change color based on value
    if (count > 0) {
        counterDisplay.style.color = '#28a745';
    } else if (count < 0) {
        counterDisplay.style.color = '#dc3545';
    } else {
        counterDisplay.style.color = '#444';
    }
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}
