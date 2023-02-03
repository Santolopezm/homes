"use strict";

function BinarioADecimal(num) {

    var binario = num.toString();
    binario = binario.split('').reverse();
    var acumulador = 0;
    for (let i = 0; i < binario.length; i++) {
        var result = binario[i] * 2 ** i;
        acumulador += result;
    }
    console.log(acumulador)
    return acumulador;

}
//BinarioADecimal(111)

function DecimalABinario(num) {
    var binario = [];

    while (num > 0) {
        var mod = num % 2;
        num = Math.floor(num / 2);
        console.log(mod);
        binario.unshift(mod);
        console.log(binario);
    }
    binario = binario.join("");
    return binario;
}

module.exports = {
    BinarioADecimal,
    DecimalABinario,
};