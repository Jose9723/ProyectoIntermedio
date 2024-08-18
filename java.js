document.getElementById('toggleSwitch').addEventListener('change', function() {
    const basicCalc = document.getElementById('calculator-basic');
    const scientificCalc = document.getElementById('calculator-scientific');

    if (this.checked) {
        basicCalc.style.display = 'none';
        scientificCalc.style.display = 'block';
    } else {
        basicCalc.style.display = 'block';
        scientificCalc.style.display = 'none';
    }
});

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '';
    } catch (e) {
        display.value = 'Error';
    }
}

function deleteLastCharacter() {
    const basicCalc = document.getElementById('calculator-basic');
    const display = basicCalc.style.display === 'none' 
        ? document.getElementById('display-scientific') 
        : document.getElementById('display');

    display.value = display.value.slice(0, -1);
}

function appendToDisplayScientific(value) {
    const display = document.getElementById('display-scientific');
    display.value += value;
}

function clearDisplayScientific() {
    const display = document.getElementById('display-scientific');
    display.value = '';
}

function calculateResultScientific() {
    const display = document.getElementById('display-scientific');
    try {
        // Reemplazar operaciones matemáticas científicas
        let expression = display.value
            .replace(/pow\(([^,]+)\)/g, 'Math.pow($1, 2)')  // Reemplaza pow(x) con x^2
            .replace(/sqrt\(([^)]*)\)/g, 'Math.sqrt($1)');  // Reemplaza sqrt(x)

        // Evaluar la expresión usando Function para una evaluación segura
        display.value = new Function('return ' + expression)() || '';
    } catch (e) {
        display.value = 'Error';
    }
}
