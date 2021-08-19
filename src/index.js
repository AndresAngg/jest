function sumar(a, b) { // Se crea la funcion sumar
    return a + b; //Se retorna el resultado de la suma
}

function restar(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function multi(a, b) {

    var rs = 0, i = 1;
    var posi = Math.abs(b) == b;
    for (i; i <= a; i++) { rs = posi ? rs += b : rs -= b; }
    return rs;
}

module.exports = multi

