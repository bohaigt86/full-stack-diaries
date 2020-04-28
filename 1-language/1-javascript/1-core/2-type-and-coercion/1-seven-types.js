/**
 * 1. null
 * 2. undefined
 * 3. boolean
 * 4. string
 * 5. number
 * 6. object
 * 7. symbol
 */

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof 'null'); // string
console.log(typeof 1); // number
console.log(typeof { foo: 'bar' }); // object
console.log(typeof Symbol()); // symbol

console.log(typeof function () {}); // function is a subtype of object
console.log(typeof []); // object

// how to tell null from object
let a = null;
console.log('a is null:', !a && typeof a === 'object');

// typeof as a safe way to detect variables
console.log(typeof a); // object => null
console.log(typeof b); // undefined => b is not defined

if (typeof b === 'undefined') {
  b = function () {
    console.log('Oh boy!');
  };
}
