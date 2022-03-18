// higer order function


// 1 take function as input
function outer(fn) {
  fn()
}


outer(() => console.log('inner'))


//2 return a funciton


const outer2 = (a) => (b) => a + b


const inner = outer2(6)


console.log(inner(4))