// 1. arrays
const arr = [1, '2', [3]];

// 2. array-like objects: have indexed access and length, but none of the array methods
function foo(a, b, c) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  console.log(arguments.length); // 3
  console.log(arguments[0]); // 1
  // arguments.forEach(arg => console.log(arg)) // TypeError: arguments.forEach is not a function

  // 3 ways to turn array-like object into array
  let argsArr;
  // #1
  // argsArr = Array.prototype.slice.call(arguments);
  // #2
  // argsArr = Array.from(arguments);
  // #3
  argsArr = [...arguments];

  console.log(argsArr);
}
foo(1, 2, 3); // [ 1, 2, 3 ]

// 3. strings
const str = 'hello';
// console.log(str[0]); // indexed access is allowed
console.log(str.charAt(0)); // but charAt() is the standard way
// string is immutable, operations on a string will result in a new string
const strUpper = str.toUpperCase();
console.log(strUpper === str); // false
console.log(str); // "hello"
// a string can borrow array methods that do not mutate the string, or just imagine strings are read-only
const strDot = Array.prototype.join.call(str, '.');
console.log('Custom Log Out: strDot', strDot); // "h.e.l.l.o"
// const strReverse = Array.prototype.reverse.call(str); // TypeError: Cannot assign to read only property '0' of object '[object String]'

// 4. numbers
// if a number is too big or too small, use exponential notation
const num = 5e10;
console.log(num); // 50000000000
console.log(num.toExponential()); // 5e+10
// precision
const newNum = 87.16;
// toFixed()
console.log(newNum.toFixed(4)); // 87.1600
// toPrecision()
console.log(newNum.toPrecision(3)); // 87.2
// precision issues in binary floating-point numbers
console.log(0.1 + 0.2 === 0.3); // false
function closeEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}
const num1 = 0.1 + 0.2;
const num2 = 0.3;
console.log(closeEnoughToEqual(num1, num2)); // true
// max number and min number, if out of the range, save in string format => leetcode: multiply strings
const max = Math.pow(2, 53) - 1;
const min = 1 - Math.pow(2, 53);
console.log(`Is ${max} a safe integer: ${Number.isSafeInteger(max)}`); // true
console.log(`Is ${min} a safe integer: ${Number.isSafeInteger(min)}`); // true
// NaN
const notANumber = 1 / 'hi';
console.log(Number.isNaN(notANumber)); // true
console.log(Object.is(notANumber, NaN)); // true

// 5. reference
const numArr = [1, 2, 3];
const anotherNumArr = numArr;
anotherNumArr.push(4);
console.log(numArr); // 1,2,3,4
const copyNumArr = numArr.slice(); // shallow copy
copyNumArr.push(5);
console.log(numArr); // 1,2,3,4
