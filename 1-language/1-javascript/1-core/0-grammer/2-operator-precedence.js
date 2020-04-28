// && > || > ?:
// && || => left associativity (a && b) && c
// ? : right associativity a ? b : (c ? d : e)

/**
 * Short circuiting
 */
// false && true === false;
// true || false === true;

// function getIngredients() {}
// function prepareFood() {}
// function cook() {
//   if (
//     (areIngredientsReady || getIngredients()) &&
//     typeof prepareFood !== undefined
//   ) {
//     prepareFood();
//   }
// }
