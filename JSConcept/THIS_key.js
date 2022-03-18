// The value of “this” keyword will always depend on the object that is invoking the function.
function doSomething() {
  console.log(this);
}

// return global object
doSomething();


var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  }
}

obj.getName();


var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  }

}

var getName = obj.getName;

var obj2 = { name: "akshay", getName };
obj2.getName();