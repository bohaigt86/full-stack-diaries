class Car {
  constructor(make, year) {
    if (new.target === Car) {
      throw new Error('This class cannot be instantiate directly.');
      return;
    }

    this.make = make;
    this.year = year;
  }

  showInfo() {
    console.log(`This is a year ${this.year} ${this.make}.`);
  }
}

class Subaru extends Car {
  constructor(year) {
    super('Subaru', year);
  }
}

const myFirstCar = new Subaru(2012);
myFirstCar.showInfo();

const aCar = new Car('Honda', 2020);
