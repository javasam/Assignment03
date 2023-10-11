let startNumber = parseInt(prompt("Enter countdown time"));
const countdown = document.getElementById('countdownId');

countdown.innerHTML = startNumber;
const interval = setInterval(function() {
    startNumber--;

    if (startNumber >= 0) {
        countdown.innerHTML = startNumber;
    } else {
        clearInterval(interval);
        countdown.innerHTML = "Countdown complete!";
    }
}, 1000);