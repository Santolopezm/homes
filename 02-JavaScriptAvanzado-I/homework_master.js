// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//   var x = 10;
//   console.log(x); // 10
//   console.log(a); // 8
//   var f = function (a, b, c) {
//     b = a;
//     console.log(b); // 8
//     b = c;
//     var x = 5;
//   };
//   f(a, b, c);
//   console.log(b); // 9
// };
// c(8, 9, 10);
// console.log(b); // 10
// console.log(x); // 1
//********************************************************** */
// console.log(bar); // undefined
// console.log(baz); // not defined
// foo();
// function foo() {
//   console.log("Hola!");
// }
// var bar = 1;
// baz = 2;
//*************************************************************** */
// var instructor = "Tony";
// if (true) {
//   var instructor = "Franco";
// }
// console.log(instructor);
//*********************************************************************** */
// var instructor = "Tony";
// console.log(instructor); // Tony

// (function () {
//   if (true) {
//     var instructor = "Franco";
//     console.log(instructor); // Franco
//   }
// })();

// console.log(instructor); // Tony
//*********************************************************************************** */
// var instructor = "Tony";
// let pm = "Franco";
// if (true) {
//   var instructor = "The Flash";
//   let pm = "Reverse Flash";
//   console.log(instructor); // The Flash
//   console.log(pm); // Reverse Flash
// }
// console.log(instructor); // The Flash
// console.log(pm); // Franco
//************************************************************************************ */
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log({}[0]);
// console.log(parseInt("09"));
// console.log(5 && 2);
// console.log(2 && 5);

// var a = 10;
// var b = 15;

// if (b > a) {
//   console.log("Es mayor");
// }

// b > a && console.log("Es mayor");

// console.log(5 || 0);
// console.log(0 || 5);

// console.log([3] + [3] - [10]);

// console.log(3 > 2 > 1);

// console.log([] == ![]);
//************************************************************** */
// function test() {
//   console.log(a); // undefined
//   console.log(foo()); // 2

//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }

// test();
//******************************************************************* */
var snack = "Meow Mix";

function getFood(food) {
    if (food) {
        var snack = "Friskies";
        return snack;
    }
    return snack;
}

console.log(getFood(false));