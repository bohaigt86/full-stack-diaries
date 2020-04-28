// explicitly
// 1. between string and number
// let a = 1;
// let b = '3.14';
// const a1 = String(a);
// const b1 = Number(b);
// const a2 = a.toString();
// const b2 = +b;
// 1.1 time to number
// const es5Now = +new Date();
// const now = Date.now();
// const yesterday = new Date('Friday, 25 April 2020 00:39:12').getTime();
// console.log(es5Now === now);
// console.log(now);
// console.log(yesterday);

// 2. parse integer
// parseInt will turn the first param into string then do the parsing
// console.log(parseInt('3.14')); // 3
// console.log(parseInt('hello')); // NaN
// console.log(parseInt(1 / 0, 19)); // 18 => parseInt('Infinity', 19)
// console.log((1 / 0).toString());
// console.log('I'.charCodeAt(0) - 'A'.charCodeAt(0) + 10);
// console.log(parseInt(0.0000008)); // 8
// console.log((0.0000008).toString()); // 8e - 7
// console.log(parseInt(false, 16)); // 250 => "fa"
// console.log(false.toString());
// console.log(parseInt('0x10')); // 16
// console.log(parseInt('103', 2)); // 2

// 3. boolean value
// const a = '0';
// const b = [];
// const c = {};
// const d = '';
// const e = 0;
// const f = null;
// let g;

// console.log(Boolean(a)); // true
// console.log(Boolean(b)); // true
// console.log(Boolean(c)); // true
// console.log(Boolean(d)); // false
// console.log(Boolean(e)); // false
// console.log(Boolean(f)); // false
// console.log(Boolean(g)); // false

// console.log(!!a); // true
// console.log(!!b); // true
// console.log(!!c); // true
// console.log(!!d); // false
// console.log(!!e); // false
// console.log(!!f); // false
// console.log(!!g); // false

// implicitly
// || and &&
// const a = 42;
// const b = 'a';
// const c = null;
// console.log(a || b); // 42
// console.log(a && b); // 'a'
// console.log(c || b); // 'a'
// console.log(c && b); // null
// guard operator
// function foo() {
//   console.log('a:', a);
// }
// const a = 10;
// a && foo(); // 'a: 10'
// == and ===
// == allows enforcing a type conversion, while === does not
// console.log('42' == 42); // true
// console.log('42' === 42); // false
// console.log('42' != 42); // false
// console.log('42' !== 42); // true
// console.log(true == '42'); // false true => 1 "42" => 42
