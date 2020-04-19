// How does ES6 classes work under the hood?
const mixin = (target, origin) => {
  for (let key in origin) {
    if (!(key in target)) {
      target[key] = origin[key]; // shallow clone
    }
  }
  return target;
};

const object = (origin) => {
  function F() {}
  F.prototype = origin;
  return new F();
};

const Car = {
  engines: 1,
  wheels: 4,
  types: ['SUV', 'Hatch', 'Sedan', 'Coupe'],
  ignition: () => {
    console.log('Turning on the engine.');
  },
};

const Subaru = mixin(Car, {
  make: 'Subaru',

  ignition: () => {
    Car.ignition.call(this); // explicit mixin

    console.log('By pressing a button.');
  },

  drive: () => {
    Car.ignition.call(this);
    console.log('Moving forward...');
  },
});

const myFirstCar = Object.create(Subaru);
myFirstCar.drive();

console.log(Object.getPrototypeOf(myFirstCar)); // Object Subaru
console.log(Subaru.isPrototypeOf(myFirstCar)); // true
console.log(myFirstCar.hasOwnProperty('make')); // false

Subaru.types.push('Van');
console.log(Car.types); // SUV, Hatch, Sedan, Coupe, Van
