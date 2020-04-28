'use strict';
/**
 * Statement completion value and side effect of expression
 */
// var a = 42,
//   b;
// b = (a++, a);
// console.log('a:', a); // 43
// console.log('b:', b); // 43
// var c = 42,
//   d;
// (d = c++), c;
// console.log('c:', c); // 43
// console.log('d:', d); // 42
// var e, f, g;
// e = f = g = 42;

/**
 * Context
 */
// use a label with curly braces
// foo: for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     // do the next outer loop
//     if (j === i) {
//       continue foo;
//     }

//     // do the next inner loop
//     if ((j * i) % 2 === 1) {
//       continue;
//     }

//     console.log(i, j);
//   }
// }
// foo: for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     // break the outer loop
//     if ((j * i) % 2 === 1) {
//       console.log('Stop at ', i, j);
//       break foo;
//     }

//     console.log(i, j);
//   }
// }
// console.log('Execute codes after break');
