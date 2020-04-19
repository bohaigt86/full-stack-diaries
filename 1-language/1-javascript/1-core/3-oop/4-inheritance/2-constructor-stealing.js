function Car(make) {
  this.make = make;
}

function Subaru(year) {
  Car.call(this, 'Subaru');
  this.year = year;
  this.models = ['BRZ', 'STI', 'Forester'];
  this.showOptions = function () {
    console.log('My options include: ' + this.models.join(', ') + '.');
  };
}

const myFirstCar = new Subaru(2012);
console.log(myFirstCar);
const mySecondCar = new Subaru(2020);
console.log(mySecondCar);

myFirstCar.models.unshift('Outback');

myFirstCar.showOptions();
mySecondCar.showOptions();
