// # Homework JavaScript Avanzado I

// ## Scope & Hoisting

// Determiná que será impreso en la consola, sin ejecutar el código.

// > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.


x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    var x = 10;
    console.log(x); //10
    console.log(a); //8
    var f = function(a, b, c) {
        b = a;
        console.log(b) //8
        b = c;
        var x = 5;
    };
    f(a, b, c);
    console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1



console.log(bar); //undefined
//console.log(baz); //is not defined
foo();

function foo() {
    console.log('Hola!'); //hola
}
var bar = 1;
baz = 2;


var instructor = 'Tony';
if (true) {
    var instructor = 'Franco';
}
console.log(instructor); // franco



var instructor = 'Tony';
console.log(instructor); // tony
(function() {
    if (true) {
        var instructor = 'Franco';
        console.log(instructor); // Franco
    }
})();
console.log(instructor); //Tony


var instructor = 'Tony';
let pm = 'Franco';
if (true) {
    var instructor = 'The Flash';
    let pm = 'Reverse Flash';
    console.log(instructor); //theflah
    console.log(pm); //reverse Flash
}
console.log(instructor); //Tony
console.log(pm); //Franco




// ### Coerción de Datos

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:


6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$9
    "4" - 2 // 2
    "4px" - 2 // NaN
7 / 0 // infinito
console.log({}[0]) // undefined
parseInt("09") //9
console.log(5 && 2) //2
console.log(2 && 5) // 5
console.log(0 || 0 || 4)
console.log(5 || 0) // 5
console.log(0 || 5) // 0
console.log([3] + [3] - [10]) //23
console.log(3 > 2 > 1) //false
console.log([] == ![])




// > Si te quedó alguna duda repasá con [este artículo]
//(http://javascript.info/tutorial/object-conversion).

// ### Hoisting

// ¿Cuál es el output o salida en consola luego de ejecutar 
// este código ? Explicar por qué :


function test() {
    console.log(a); //undefined
    console.log(foo()); //2

    var a = 1;

    function foo() {
        return 2;
    }
}

test();




var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies'; // como no entra la variable se pisa sin valor.
        return snack;
    }
    return snack;
}
console.log(getFood(false));


// ### This

// ¿Cuál es el output o salida en consola luego de ejecutar esté código?
// Explicar por qué:


fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        },
    },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());


// ### Event loop

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?



function printing() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
    }, 1000);
    setTimeout(function() {
        console.log(3);
    }, 0);
    console.log(4);
}

printing(); //1,4,3,2