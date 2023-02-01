// https://juejin.cn/post/7013618956166512677#heading-7

class DeepClone {
  cache = [];
  clone(source) {
    if (source instanceof Object) {
      let cachedDist = this.findCache(source);
      if (cachedDist) {
        return cachedDist;
      } else {
        let dist;
        if (source instanceof Object) {
          if (source instanceof Array) {
            dist = [];
          } else if (source instanceof Function) {
            dist = function () {
              return source.call(this, ...arguments);
            };
          } else if (source instanceof RegExp) {
            dist = new RegExp(source.source, source.flags);
          } else if (source instanceof Date) {
            dist = new Date(source);
          } else {
            dist = {};
          }
          this.cache.push([source, dist]);
          for (let key in source) {
            if (source.hasOwnProperty(key)) {
              // 只复制不在原型上的属性
              dist[key] = this.clone(source[key]);
            }
          }
          return dist;
        }
      }
    }
    return source;
  }

  findCache(source) {
    for (let i = 0; i < this.cache.length; i++) {
      if (this.cache[i][0] === source) {
        return this.cache[i][1];
      }
    }
  }
}


/* 

Creates a deep clone of an object. Clones primitives, arrays and objects, excluding class instances.

Use recursion.
Check if the passed object is null and, if so, return null.
Use Object.assign() and an empty object ({}) to create a shallow clone of the original.
Use Object.keys() and Array.prototype.forEach() to determine which key-value pairs need to be deep cloned.
If the object is an Array, set the clone's length to that of the original and use Array.from() to create a clone.


*/


const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
    (clone[key] =
      typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};



// const myClone = (obj) => {
//   if (obj === null) return null;
//   let clone = Object.assign({}, obj); //new object


//   Object.keys(clone).forEach(key => {
//     clone[key] = typeof clone[key] === 'object' ? myClone(obj[key]) : obj[key]
//   })

//   if (Array.isArray(obj)) {
//     clone.length = obj.length
//     return Array.from(clone)
//   }

//   return clone

// }


// const a = [1, 2, 3]


// console.log(typeof a === 'object');

// let cone = Object.assign({}, a);

// console.log(cone)


// cone.length = 3

// console.log(cone)

// cone = Array.from(cone)

// console.log(cone)


//! momorize
const deepCopy = (inObject) => {
  let outObject
  if (typeof inObject !== 'object' || inObject == null) {
    return inObject
  }

  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // recursvingly (deep) coyy for nested boject, including arrays
    outObject[key] = deepCopy(value)
  }

  return outObject;

}



const a = [1, 2, 3]

for (key in a) {
  console.log(key)
}


const deepC = (inObj) => {
  if (typeof inObj !== 'object' || inObj === null) {
    return inObj
  }

  let outObject

  outObject = Array.isArray(inObj) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    outObject[key] = deepC(value)
  }


  return outObject;

}