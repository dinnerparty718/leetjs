/**
 * Weakset contains only objects and no other type.
 * An object inside the weakset is referenced weakly. This means, if the object inside the weakset does not have a reference, it will be garbage collected.
 * Unlike Set, WeakSet only has three methods, add() , delete() and has() .
 */


//weakMap



function func2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }

}

// func2(); // 3 3 3


(function () {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();