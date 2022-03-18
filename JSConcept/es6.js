/**

Rest parameter ( … ) It provides an improved way of handling parameters of a function. Any number of arguments will be converted into an array using the rest parameter.
*Note- Rest parameter should always be used at the last parameter of a function:


Spread operator (…)
spread operator is used to spread an array, and object literals
 */


function extractingArgs(...args) {
  return args[1];
}


// Correct way to use rest parameter
function randomFunc2(a, b, ...args) {
  //Do something
}