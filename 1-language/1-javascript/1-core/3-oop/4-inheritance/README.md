- Since there's no class in javascript like other languages, such as Java or C++, everything we do for inheritance is about objects.
- Constructor functions are objects, function prototypes are objects, and instances are objects.
  This is also the foundation of delegation model, where you can use Object.create or Object.setPrototypeOf to link two normal objects by `[[Prototype]]`
- Functions create a new 'type', for when a function is created, it will automatically generate a prototype object.
- When a new object is created by Object.create(null), it is just an empty object, no side effect, like generating a prototype object, will happen.
