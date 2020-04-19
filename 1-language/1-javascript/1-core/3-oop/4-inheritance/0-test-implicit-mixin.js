const Car = {
  init: function () {
    this.engine = 1;
    this.wheels = 4;
    this.types = ['SUV', 'Hatch', 'Sedan', 'Coupe', 'Van'];
  },
};

Car.init();
console.log(Car);

const Subaru = {
  init: function () {
    Car.init.call(this);
  },
};
