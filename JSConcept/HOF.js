// higer order function

/*

Higher-order functions.
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.


*/


// 1 take function as input
function outer(fn) {
  fn()
}


outer(() => console.log('inner'))


//2 return a funciton


const outer2 = (a) => (b) => a + b


const inner = outer2(6)


console.log(inner(4))