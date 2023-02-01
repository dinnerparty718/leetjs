// This method invokes a method (function) by specifying the owner object.


// call and apply
// call() method takes arguments separately whereas, apply() method takes arguments as an array.
// #! apply()  is more useful when you can provide 


function sayHello(message) {
  return "Hello " + this.name + ' ' + message;
}

var obj = { name: "Sandy" };

const a = sayHello.call(obj, 'inner message');
const b = sayHello.call(obj, ['a', 'b']);


// Returns "Hello Sandy"

console.log(a)
console.log(b)

console.log(c);

// bind() This method returns a new function,
// where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.

var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
  }
}

var person1 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

console.log(detailsOfPerson1())