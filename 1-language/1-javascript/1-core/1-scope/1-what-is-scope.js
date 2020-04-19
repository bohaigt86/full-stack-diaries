/**
 * evidence of separation of parsing and compilation
 */

/**
 * #1. syntax errors from the start
 * throw SyntaxError: Unexpected token .
 * line 3 causes the problem, but line 1 and line 2 are not executed as well
 * this can only accomplished by JS engine parsing the whole program before executing it
 */
// var greeting = 'Hello!'; // line 1
// console.log(greeting); // line 2
// var farewell = .'Bye!'; // line 3

/**
 * #2. early errors
 * SyntaxError: Duplicate parameter name not allowed in this context
 * The only explanation is that code must by fully parsed before execution
 */
// console.log('Howdy');
// speak('Hello', 'Hi');
// function speak(greeting, greeting) {
//   'use strict';
//   console.log(greeting);
// }

/**
 * #3. hoisting
 * ReferenceError: Cannot access 'greeting' before initialization
 * the variable to be logged out is the one defined inside curly braces
 * not the one outside
 * this can only accomplished by JS engine parsing the whole program before executing it
 */
// function speak() {
//   var greeting = 'Hello';
//   {
//     // A temporal Dead Zone
//     greeting = 'Howdy'; // it accesses greeting too early
//     let greeting = 'Hi'; // as this block scoped variable is defined later
//     console.log(greeting); // it's the let greeting not the var greeting
//   }
// }
// speak();
