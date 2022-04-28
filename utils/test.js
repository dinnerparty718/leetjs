/**
 * [object String]
 * [object Number]
 * [object Boolean]
 * [object Function]
 * [object Undefined]
 * [object Array]
 * [object Date]
 * [object RegExp]
 *
 *
 * [object Map]
 * [object Set]
 */

let obj = 'abc'; // [object String]

obj = 1; // [object Number]
obj = false; // [object Boolean]

obj = new Set();

// obj = () => {}; // [object Function]
// obj = undefined; // [object Undefined]

// obj = []; //[object Array]

// obj = new Date(); // [object Date]

obj = new RegExp('hi\\d+', 'gi'); // [object RegExp]
console.log(Object.prototype.toString.call(obj));

console.log(obj.source + ' ' + obj.flags);
