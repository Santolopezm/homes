// PARÁMETROS Y ARGUMENTOS
// ========== ========== ==========
// Muchas veces se utilizan estos términos indistintamente
// Veamos la diferencia entre ambos:
function sum(a, b, c) {
    // => Veamos qué es un parámetro:
    console.log(sum.length); //Output: 3
    //functionName.length; => Nos indica la cantidad de parámetros
    //Parámetros: a, b, c
    console.log(a); //Output: 4
    console.log(b); //Output: 5
    console.log(c); //Output: undefined
  
    // => Veamos qué es un argumento:
    console.log(arguments); //Output: {[Iterator] 0: 4, 1: 5}
    //arguments => contiene un Iterator con todos los argumentos de la función
    //Un Iterator es algo similar a un array
    //Argumentos: 1, 2
    console.log(arguments.length); //Output: 2
    //arguments.length; => Nos indica la cantidad de argumentos
    
    return a + b;
  }
  
  console.log(sum(4, 5)); //Output: 9
  
  // Resumen:
  //Un parámetro es similar al "nombre" de una variable dentro de la función
  //Un argumento es el valor que toma un parámetro en un contexto de ejecución
  //El argumento lo enviamos al llamar a la función
  //Para nuestro ejemplo podemos imaginar que internamente sucede lo siguiente:
  // function sum (a, b, c) {
  //   const a = 4; //parámetro = argumento
  //   const b = 5; //parámetro = argumento
  //   const c; //parámetro declarado, pero no inicializado
  //   return a + b;
  // }