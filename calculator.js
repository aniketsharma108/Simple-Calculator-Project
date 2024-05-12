function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteEntry() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// keydown event
document.addEventListener("keydown", function(event) {
    var key = event.key;
    // var display = document.getElementById("display");

    if (/[\d\+\-\*\/\.\(\)%]/.test(key) || key === '(' || key === ')') {
        // appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteEntry();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});


// massive.aniket@gmail.com
