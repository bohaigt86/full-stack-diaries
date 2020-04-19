function Car(make) {
  this.make = make;
}

Car.prototype.showMake = function () {
  console.log('This is a ' + this.make + ' car.');
};

function Subaru(year) {
  Car.call(this, 'Subaru');
  this.year = year;
}

// const tempPrototype = Object.create(Car.prototype);
// tempPrototype.constructor = Subaru;
// Subaru.prototype = tempPrototype;

Object.setPrototypeOf(Subaru.prototype, Car.prototype);
Subaru.prototype.showYear = function () {
  console.log('It is a year ' + this.year + ' model.');
};

const myFirstCar = new Subaru(2012);
myFirstCar.showMake();
myFirstCar.showYear();

console.log(Subaru.prototype);
console.log(Car.prototype.isPrototypeOf(Subaru.prototype)); // true
console.log(Subaru.prototype.constructor); // function Subaru
