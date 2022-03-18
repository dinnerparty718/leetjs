
// the this keyword always refers to the object that is calling the function.
var obj1 = {
  valueOfThis: function () {
    return this;
  }
}


// It rather inherits its value from the parent scope which is the window object in this case.
var obj2 = {
  valueOfThis: () => {
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object
