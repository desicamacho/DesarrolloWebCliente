'use strict'

alert('Hola usuario!');

let op = '';
let repetir = false;
let operador1;
let operador2;
let lastResult;

//Clase que realiza los calculos.
class calculadora {
    sum() {
        lastResult = operador1 + operador2;
        return lastResult;
    }
    rest() {
        lastResult = operador1 - operador2;
        return lastResult;
    }
    mul() {
        lastResult = operoperador1 * operador2;
        return lastResult;
    }
    div() {
        lastResult = operador1 / operador2;
        return lastResult;
    }
};
let calculadoraGlobal = new calculadora();

//Expresion de funcion que pide y verificica los operadores.
let peticionDeOperadores = function() {
    let salir = false;
    while (!salir) {
        operador1 = '';
        operador2 = '';
        let operadores = prompt('Introduce los operadores separados por espacio', '');
        let i = 0;
        for (; i < operadores.length; i++) {
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
        try {
            operador1 = Number(operador1);
            operador2 = Number(operador2);
            if (isNaN(operador1) || isNaN(operador2)) {
                throw 'Tienes que introducir números';
            } else {
                salir = true;
            }
        } catch (err) {
            alert(err)
            salir = false;
        }
    }
    console.log(op);
}

//Menu principal.
do {
    do {
        peticionDeOperacion();

    } while (!Object.is(op, '+') && !Object.is(op, '-') && !Object.is(op, '*') && !Object.is(op, '/'));

    peticionDeOperadores();

    switch (op) {
        case '+':
            alert(calculadoraGlobal.sum());
            break;
        case '-':
            alert(calculadoraGlobal.rest());
            break;
        case '*':
            alert(calculadoraGlobal.mul());
            break;
        case '/':
            alert(calculadoraGlobal.div());
            break;
    }

    repetir = confirm('Quieres realizar otra operación?');
} while (repetir);

//Funcion que recoge la operacion.
function peticionDeOperacion() {
    try {
        op = prompt('Elije operación: +, -, * ó /', '');
        op = op.trim();
        if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
            throw 'La operación introducida es errónea. Prueba de nuevo.';
        }
    } catch (err) {
        alert(err);
    }
}