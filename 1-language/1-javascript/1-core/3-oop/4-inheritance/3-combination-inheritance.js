function Car(make) {
  this.make = make;
}

function Subaru(year) {
  Car.call(this, 'Subaru');
  this.year = year;
  this.models = ['Outback', 'BRZ', 'Forester'];
}

Subaru.prototype.showOptions = function () {
  console.log('My options include: ' + this.models.join(' ') + '.');
};

const myFirstCar = new Subaru(2012);
const mySecondCar = new Subaru(2020);

myFirstCar.models.push('XV');

myFirstCar.showOptions();
mySecondCar.showOptions();
