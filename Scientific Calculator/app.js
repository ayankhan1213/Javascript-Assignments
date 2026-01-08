// You can click on the button to give the value of the button.
function press(val) {
    let input = document.getElementById("display");
    if (input.value === '0') {
        input.value = val
    } else {
        input.value += val
    }
}
// This will Delete all values from Input
function clearAll() {
    let input = document.getElementById("display");
    input.value = '0'
}
// This will remove one by one value from Input
function del() {
    let input = document.getElementById("display");
    input.value = input.value.slice(0, -1)
}

// This will add 00 in Input
function zero() {
    let input = document.getElementById("display");
    input.value += '00'
}

function toRadian(deg) {
    return deg * Math.PI / 180;
}

function sin() {
    let input = document.getElementById("display");
    let deg = Number(input.value);
    let radian = toRadian(deg);
    input.value = Math.sin(radian);
}

function cos() {
    let input = document.getElementById("display");
    let deg = Number(input.value);
    let radian = toRadian(deg);

    input.value = Math.cos(radian);
}
function tan() {
    let input = document.getElementById("display");
    let deg = Number(input.value);
    let radian = toRadian(deg);

    input.value = Math.tan(radian);
}

function perce(a) {
    let input = document.getElementById("display");
    input.value += a
}

function square(f) {
    let input = document.getElementById("display");
    let num = Number(input.value)
    input.value = num * num
}

function cube(){
    let input = document.getElementById("display");
    let dis = document.getElementById("display");
    let num = Number(input.value)
    input.value = num*num*num
}
function sqrt() {
    let input = document.getElementById("display");
    let num = Number(input.value);
    if (num < 0) {
        input.value = 'Invalid';
        return;
    }
    input.value = Math.sqrt(num);
}

function PI(a){
    let input = document.getElementById("display");
    if(input.value == '0'){
        input.value =  Math.PI.toFixed(7)
    }else{
        input.value += '*' + Math.PI.toFixed(7)
    }
}
function pow() {
    let input = document.getElementById("display");
    let value = input.value;

    if (value.includes("^")) {
        value = value.replaceAll("^", "**");
        input.value = eval(value);
    }
}


function equ() {
    let input = document.getElementById("display");
    if (!input.value || input.value.trim() === '0') {
        input.value = 'Syntax Error';
    } else {
        input.value = eval(input.value);
    }
}

