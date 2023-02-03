var num = "10111";
console.log(num);
//arrNumVolt = num.split('').reverse();
//console.log(arrNumVolt);
//console.log(typeof num);
var decimal = 0;
var indice = num.length - 1;
for (var i = 0; i < num.length; i++) {
    // var resul = arrNumVolt[i] * 2 ** (i);
    decimal += num[i] * 2 ** (indice);
    indice--;
}
console.log(decimal)

var num = "10111";
//console.log(num);
arrNumVolt = num.split('').reverse();
//console.log(arrNumVolt);
//console.log(typeof num);
var decimal = 0;
for (var i = 0; i < arrNumVolt.length; i++) {
    //var resul = arrNumVolt[i] * 2 ** (i);
    decimal += arrNumVolt[i] * 2 ** (i);
}
console.log(decimal)

console.log(parseInt("10111", 2))


var numero = 9;
var bin = [];
while (numero > 0) {
    //var mod = numero % 2;
    bin.unshift(numero % 2);
    numero = Math.floor(numero / 2)
}
console.log(bin)

console.log(num.toString(2))