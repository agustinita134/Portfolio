const countElement = document.getElementById("count");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");
const messageElement = document.getElementById("message");

let count = 0;

function updateCount() {
    countElement.textContent = count;
}

function showMessage(message) {
    messageElement.textContent = message;
}

incrementButton.addEventListener("click", () => {
    count++;
    updateCount();
    if (count === 10) {
        showMessage("¡Has alcanzado 10!");
    } else {
        showMessage("");
    }
});

decrementButton.addEventListener("click", () => {
    count--;
    updateCount();
    if (count < 0) {
        showMessage("¡El contador no puede ser negativo!");
    } else {
        showMessage("");
    }
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
    showMessage("");
});
