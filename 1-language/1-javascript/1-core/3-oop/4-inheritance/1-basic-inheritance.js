const chalk = require('chalk');

function SuperClass(params) {
  this.title = 'Super';
}

SuperClass.prototype.getTitle = function () {
  return this.title;
};

function SubClass() {
  this.subTitle = 'Sub';
}
// rewrite SubClass' prototype
SubClass.prototype = new SuperClass();

SubClass.prototype.getSubTitle = function () {
  return this.subTitle;
};

let sub = new SubClass();
console.log(sub.getSubTitle()); // "Sub"
console.log(SubClass.prototype.constructor); // SuperClass
console.log(sub.constructor); // SuperClass
console.log(SuperClass.prototype.isPrototypeOf(sub)); // true
console.log(Object.getPrototypeOf(sub) === SubClass.prototype); // true

console.log(sub.getTitle()); // "Super"
