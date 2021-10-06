            alert('Bienvenido');
            let repetir = true;
            let operador1;
            let operador2;

            do {
                let operacion = prompt('Que operacion quieres realizar?', '+')
                operacion = operacion.trim();
                if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
                    do {
                        alert('La operación introducida es errónea.')
                    } while (operacion === '+' && operacion === '-' && operacion === '*' && operacion === '/');


                } else {

                    while (true) {
                        operador1 = '';
                        operador2 = '';
                        let operadores = prompt('Inserta dos operadores.');
                        operadores.trim();
                        let i = 0;
                        for (; i < operadores.length; i++) {
                            if (operadores[i] !== ' ') {
                                operador1 += operadores[i];
                            } else {
                                if (operador1 !== '') {
                                    break;
                                }
                            }
                        }

                        for (; i < operadores.length; i++) {
                            if (operadores[i] !== ' ') {
                                operador2 += operadores[i];
                            } else {
                                if (operador2 !== '') {
                                    break;
                                }
                            }
                        }
                        operador1 = Number(operador1);
                        operador2 = Number(operador2);
                        if (isNaN(operador1) || isNaN(operador2)) {
                            alert('Tienes que introducir números')

                        } else {
                            break;

                        }
                    }
                    if (operacion === '+') {
                        alert(operador1 + operador2);

                    }
                    if (operacion === '-') {

                        alert(operador1 - operador2)
                    }
                    if (operacion === '/') {
                        alert(operador1 / operador2)
                    }
                    if (operacion === '*') {
                        alert(operador1 * operador2)
                    }
                    repetir = confirm('Quieres realizar otra operación?');


                }
            } while (repetir === true);