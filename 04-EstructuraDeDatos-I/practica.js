function cuenta(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
cuenta(10)

//*********************************************************** */

function cuentaR(num) {
    console.log(num);
    if (num === 0) {
        return console.log("FIN");
    } else {
        cuentaR(num - 1);
    }
}
cuentaR(10)

//************************************************************ */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5))


//************************************************************* */
var num1 = [1, 2, 3, 4, 5, "string", [1, 5, 9], { a: "hola" }];

var pares = [2, 4, 6, 8, 8, 10];

const miSet = new Set(pares);

console.log(miSet);

console.log(miSet.size)

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}