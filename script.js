function clearDisplay () {
    document.getElementById('result').value = ""
}

function display (value) {
    document.getElementById('result').value += value
}

function equal() {
    var expression = document.getElementById("result").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
    document.getElementById("lastResult").value = result
    window.localStorage.setItem("lastResult", result)
}

var lastResult = document.getElementsByName('body')
lastResult.addEventListener(onchange, lastResult1())

function lastResult1() {
    var result = window.localStorage.getItem("lastResult")
    document.getElementById("lastResult").value = result
}