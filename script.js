let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");

let timer = false;
let hour = 0;
let minute = 0;
let second = 0;
let lapCount = 0;

startButton.addEventListener('click', function() {
    timer = true;
    stopwatch();
});

stopButton.addEventListener('click', function() {
    timer = false;
});

resetButton.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("mi").innerHTML = "00";
    document.getElementById("se").innerHTML = "00";
    document.getElementById("lap-times").innerHTML = "";
    lapCount = 0;
});

lapButton.addEventListener('click', function() {
    if (timer) {
        lapCount++;
        let lapTime = document.createElement("p");
        lapTime.textContent = `Lap ${lapCount}: ${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;
        document.getElementById("lap-times").appendChild(lapTime);
    }
});

function stopwatch() {
    if (timer) {
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }

        document.getElementById("hr").innerHTML = formatTime(hour);
        document.getElementById("mi").innerHTML = formatTime(minute);
        document.getElementById("se").innerHTML = formatTime(second);

        setTimeout(stopwatch, 1000);
    }
}

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}
