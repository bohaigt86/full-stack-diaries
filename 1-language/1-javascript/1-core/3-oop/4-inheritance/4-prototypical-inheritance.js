//Object.create()
// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

const subaru = {
  make: 'Subaru',
  models: ['BRZ', 'Outback', 'Forester'],
};

const myFirstCar = Object.create(subaru);
myFirstCar.year = 2012;
console.log(myFirstCar.hasOwnProperty('make'));
myFirstCar.models.push('VX');
console.log(myFirstCar.models);

const mySecondCar = Object.create(subaru);
mySecondCar.year = 2020;
console.log(myFirstCar.hasOwnProperty('year'));
mySecondCar.models.push('STI');
console.log(mySecondCar.models);
