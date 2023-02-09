// 💛 REPASO SEMANA 1 DEL MÓDULO 1 💛

// EJERCICIO 1 - CLOSURES
// Crear un Stack mediante un Closure
//   El Stack debe permitir:
//     Agregar elementos: add
//     Remover elementos: remove
//     Retornar longitud del stack: size

function stack() {
  // Tu código aquí:
}
// Resultados esperados al invocar la función:
console.log("----- Closures -----");
var myStack = stack();
myStack.add(5);
console.log(myStack.size()); // 1 (devuelve longitud de miStack)
myStack.add(7);
myStack.add(9);
console.log(myStack.size()); // 3 (devuelve longitud de miStack)
console.log(myStack.remove()); // 9 (devuelve el elemento removido)
console.log(myStack.size()); // 2 (devuelve longitud de miStack)

// EJERCICIO 2 - RESOLVER EN FORMA RECURSIVA!!!
// La función sumArray recibe un array de números enteros como argumento
// Devuelve una suma de todos los elementos del array según lo siguiente:
//   Si el número del array es par suma 0
//   Si el número del array es impar suma 1
// Ejemplos:
//   [ 2, 4 ] --> Retorna 0, ya que ambos números son pares (0 + 0 = 0)
//   [ 1, 4 ] --> Retorna 1, ya que solamente hay un número impar (1 + 0 = 1)
//   [ 1, 3, 5 ] --> Retorna 3, ya que hay tres números impares (1 + 1 + 1 = 3)

function sumArray(arr) {
  // Tu código aquí:
}
// Resultados esperados al invocar la función:
console.log("----- Recursión -----");
console.log(sumArray([0])); // 0
console.log(sumArray([0, 2, 4, 6])); // 0
console.log(sumArray([0, 1, 2, 3])); // 2
console.log(sumArray([0, 1, 2, 3, 5, 7])); // 4
console.log(sumArray([1, 3, 5, 7, 9, 11])); // 6

// EJERCICIO 3 - LINKEDLIST
// Crear la clase (o función constructora) LinkedList,
//   la cual genere una lista simplemente enlazada.
// Posee los siguientes constructores:
//   LinkedList
//   Node
// Y los siguientes métodos:
// 👉add: agrega nodo al final de la lista
// 👉insertAt: agrega nodo en la posición pasada como argumento
//             myList.insertAt(0) -> inserta en head
// 👉removeFrom: remueve nodo en la posición pasada como argumento y devuelve su valor
//               myList.removeFrom: remueve head de la lista
// 👉removeElement: remueve nodo con el valor pasado como argumento y devuelve su valor; y null si no existe.
//                  myList.removeElement(7): remueve el nodo cuyo valor es 7 (si existe)
// 👉isEmpty: retorna true si la lista está vacía, false si no lo está
// 👉getSize: retorna la longitud de la lista
// 👉print: imprime en consola todos los elementos de la lista

function LinkedList() {
  // Tu código aquí:
}

LinkedList.prototype.add = function () {
  // Tu código aquí:
};

// Resultados esperados:
console.log("----- LinkedList -----");
var myList = new LinkedList();
console.log(myList); // LinkedList { size: 0, head: null }
myList.add(7);
console.log(myList); // LinkedList { size: 1, head: Node { value: 7, next: null } }
