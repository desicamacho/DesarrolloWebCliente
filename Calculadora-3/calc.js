'use strict'

alert('Hola usuario!');

let op;
let repetir = false;
let operador1;
let operador2;
let resultado;
let lastResult;
let sacarOperadores = showMessage2;
let Calculadora = new Object();
Calculadora = {
    sum() {
        lastResult = operador1 + operador2;
        return lastResult;
    },
    rest() {
        lastResult = operador1 - operador2;
        return lastResult;
    },
    mul() {
        lastResult = operoperador1 * operador2;
        return lastResult;
    },
    div() {
        lastResult = operador1 / operador2;
        return lastResult;
    }


};


do {
    showMessage();

    sacarOperadores();

    switch (op) {

        case '+':
            alert(Calculadora.sum());
            break;
        case '-':
            alert(Calculadora.rest());
            break;
        case '*':
            alert(Calculadora.mul());
            break;
        case '/':
            alert(Calculadora.div());
            break;
    }

    repetir = confirm('Quieres realizar otra operación?');
} while ((op !== '+' && op !== '-' && op !== '*' && op !== '/') || repetir);







function showMessage() {
    op = prompt('Elije operación: +, -, * ó /', '');
    op = op.trim();
    if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        alert('La operación introducida es errónea. Prueba de nuevo.')
    }



}

function showMessage2() {
    operador1 = '';
    operador2 = '';
    let salir = false;
    while (!salir) {
        let operadores = prompt('Introduce los operadores separados por espacio', '');

        let i = 0;
        for (; i < operadores.length; i++) {
            debugger;
            if (operadores[i] === 'R') {
                operador1 = lastResult;
                break;
            }
            if (operadores[i] !== ' ') {
                operador1 += operadores[i];
            } else {
                if (operador1 !== '') {
                    break;
                }
            }
        }
        i++;

        console.log(operador1);

        for (; i < operadores.length; i++) {
            if (operadores[i] === 'R') {
                operador2 = lastResult;
                break;
            }
            if (operadores[i] !== ' ') {
                operador2 += operadores[i];
            } else {
                if (operador2 !== '') {
                    break;
                }
            }
        }
        console.log(operador2);

        operador1 = Number(operador1);
        operador2 = Number(operador2);
        if (isNaN(operador1) || isNaN(operador2)) {
            alert('Tienes que introducir números')
            salir = false;
        } else {
            salir = true;
        }
    }


    console.log(op);

}