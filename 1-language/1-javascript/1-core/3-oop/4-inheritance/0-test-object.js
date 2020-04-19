const Car = {
  engine: 1,
};

const Subaru = {
  engine: 2,
};
// const Subaru = Object.create(Car);
Object.setPrototypeOf(Subaru, Car);
console.log(Car.isPrototypeOf(Subaru)); // true

const myFirstCar = Object.create(Subaru);

const Honda = Object.create(Car);
console.log(Car.isPrototypeOf(Honda));
