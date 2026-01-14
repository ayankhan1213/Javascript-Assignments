let hour = 0;
let min = 0;
let sec = 0;
let hourHead = document.getElementById("hour")
let minHead = document.getElementById("min")
let secHead = document.getElementById("sec")
var int = null;

function timer() {
    sec++;
    secHead.textContent = sec
    if (sec >= 60) {
        min++;
        minHead.textContent = min
        sec = 0
    }
    if (min >= 60) {
        hour++;
        hourHead.textContent = hour
        min = 0
    }

    secHead.textContent = sec < 10 ? '0' + sec : sec;
    minHead.textContent = min < 10 ? '0' + min + ":" : min + ":";
    hourHead.textContent = hour < 10 ? '0' + hour + ":" : hour + ":";


}
function start() {
    if(int !== null) return 
    int = setInterval(timer, 1000)
}

function pause() {
    clearInterval(int)
    int = null
}

function reset() {
    hour = 0
    min = 0
    sec = 0
    hourHead.textContent = "00:"
    minHead.textContent = "00:"
    secHead.textContent = "00"
    pause()
}