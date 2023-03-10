// 馃挍 REPASO SEMANA 1 DEL M脫DULO 1 馃挍

// EJERCICIO 1 - CLOSURES
// Crear un Stack mediante un Closure
//   El Stack debe permitir:
//     Agregar elementos: add
//     Remover elementos: remove
//     Retornar longitud del stack: size

function stack() {
  // Tu c贸digo aqu铆:
}
// Resultados esperados al invocar la funci贸n:
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
// La funci贸n sumArray recibe un array de n煤meros enteros como argumento
// Devuelve una suma de todos los elementos del array seg煤n lo siguiente:
//   Si el n煤mero del array es par suma 0
//   Si el n煤mero del array es impar suma 1
// Ejemplos:
//   [ 2, 4 ] --> Retorna 0, ya que ambos n煤meros son pares (0 + 0 = 0)
//   [ 1, 4 ] --> Retorna 1, ya que solamente hay un n煤mero impar (1 + 0 = 1)
//   [ 1, 3, 5 ] --> Retorna 3, ya que hay tres n煤meros impares (1 + 1 + 1 = 3)

function sumArray(arr) {
  // Tu c贸digo aqu铆:
}
// Resultados esperados al invocar la funci贸n:
console.log("----- Recursi贸n -----");
console.log(sumArray([0])); // 0
console.log(sumArray([0, 2, 4, 6])); // 0
console.log(sumArray([0, 1, 2, 3])); // 2
console.log(sumArray([0, 1, 2, 3, 5, 7])); // 4
console.log(sumArray([1, 3, 5, 7, 9, 11])); // 6

// EJERCICIO 3 - LINKEDLIST
// Crear la clase (o funci贸n constructora) LinkedList,
//   la cual genere una lista simplemente enlazada.
// Posee los siguientes constructores:
//   LinkedList
//   Node
// Y los siguientes m茅todos:
// 馃憠add: agrega nodo al final de la lista
// 馃憠insertAt: agrega nodo en la posici贸n pasada como argumento
//             myList.insertAt(0) -> inserta en head
// 馃憠removeFrom: remueve nodo en la posici贸n pasada como argumento y devuelve su valor
//               myList.removeFrom: remueve head de la lista
// 馃憠removeElement: remueve nodo con el valor pasado como argumento y devuelve su valor; y null si no existe.
//                  myList.removeElement(7): remueve el nodo cuyo valor es 7 (si existe)
// 馃憠isEmpty: retorna true si la lista est谩 vac铆a, false si no lo est谩
// 馃憠getSize: retorna la longitud de la lista
// 馃憠print: imprime en consola todos los elementos de la lista

function LinkedList() {
  // Tu c贸digo aqu铆:
}

LinkedList.prototype.add = function () {
  // Tu c贸digo aqu铆:
};

// Resultados esperados:
console.log("----- LinkedList -----");
var myList = new LinkedList();
console.log(myList); // LinkedList { size: 0, head: null }
myList.add(7);
console.log(myList); // LinkedList { size: 1, head: Node { value: 7, next: null } }
