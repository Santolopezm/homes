// UNA FUNCIÓN...
// QUE RETORNA UNA FUNCIÓN
// LA FUNCIÓN RETORNADA UTILIZA UNA VARIABLE DE UN CONTEXTO MAYOR

// function crearSaludo(saludo) {
//   return function (nombre) {
//     console.log(saludo, nombre);
//   };
// }

// var saludarHola = function (nombre) {
//   console.log(saludo, nombre);
// };

// saludarHola("Jorge");

function crearContador() {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}

var contador1 = crearContador();

console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());

var contador2 = crearContador();
console.log(contador2());
console.log(contador2());
console.log(contador2());
console.log(contador2());
