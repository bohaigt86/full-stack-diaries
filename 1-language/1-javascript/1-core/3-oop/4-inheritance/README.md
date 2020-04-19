* Since there's no class in javascript like other languages, such as Java or C++, everything u do about inheritance is actually manipulating objects.
* Constructor functions are objects, function prototypes are objects, and instances are objects.
This is the basis of delegation model, where you can use Object.create or Object.setPrototypeOf to link two normal objects by `[[Prototype]]`
* Functions create a new 'type', as when u create a function, it will automatically generate a prototype object.
* When u create a new object, it is just an object, no side effect like generating a prototype object will happen.
