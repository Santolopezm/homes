// RECURSION ----- -----
// Utilizar recursión para resolver el siguiente ejercicio.
// En el objeto "rutas" están indicadas las rutas ferroviarias entre ciudades.
// Nos indica por ejemplo que desde "Lisboa" existe un tren mediante el cual podemos ir a "Barcelona", "Madrid" y "Sevilla".
// La función "hayRuta" recibe como parámetros el objeto "rutas", una ciudad de salida y otra de destino.
// Deberá retornar "true" si existe un camino para llegar desde la ciudad de salida hasta la de destino, o false si no la hay.
// Por ejemplo:
//   Input: rutas, "Lisboa", "Munich"
//   Output: true
//   Explicación: Podemos ir desde "Lisboa" a "Madrid", y desde allí ir a "Paris", y desde aquí a "Munich"
// Por otro lado no existe un camino entre "Praga" y "Madrid"
// TIP: Observar que no existe posibilidad de regresar hacia atrás, en "rutas" sólo se indican ciudades que se "alejan" de nuestra ciudad de salida, por lo tanto NO es posible por ejemplo volver desde "Munich" a "Lisboa".
//                   Lisboa
//                  /   |   \
//                 /    |    \
//        Barcelona  Madrid  Sevilla
//                 /    |   \
//                /     |    \
//            Paris   Nantes  Burdeos
//           /     \
//          /       \
//         Berlin    Munich
//        /   |  \
//       /    |   \
//  Praga  Zurich  Roma

var rutas = {
  Lisboa: ["Barcelona", "Madrid", "Sevilla"],
  Madrid: ["Paris", "Nantes", "Burdeos"],
  Paris: ["Berlin", "Munich"],
  Berlin: ["Praga", "Zurich", "Roma"],
};

function hayRuta(rutas, salida, destino) {
  // Tu código aquí:
}

// Algunos output esperados:
console.log(hayRuta(rutas, "Lisboa", "Sevilla")); // true
console.log(hayRuta(rutas, "Lisboa", "Munich")); // true
console.log(hayRuta(rutas, "Madrid", "Roma")); // true
console.log(hayRuta(rutas, "Ibiza", "Roma")); // false
console.log(hayRuta(rutas, "Praga", "Madrid")); // false