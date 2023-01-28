function memoizedAddTo256() {
  var cache = {};

  return function (num) {
    if (num in cache) {
      console.log("cached value");
      return cache[num]

    }
    else {
      cache[num] = num + 256;
      return cache[num];
    }
  }
}


var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return



function memoize(func) {
  // Create a new cache, just for this function
  let cache = new Map();

  const memoized = function (...args) {
    // Use the first argument as the cache key.
    // If your function takes multiple args, you may
    // want to come up with a more complex scheme
    let key = args[0];

    // Return the cached value if one exists
    if (cache.has(key)) {
      return cache.get(key);
    }

    // Otherwise, compute the result and save it
    // before returning it.
    let result = func.apply(this, args);
    // let result = func(...args)
    cache.set(key, result);
    return result;
  };

  return memoized;
}

function doSort(items) {
  console.log('doing the sort');
  // return [...items.sort((a, b) => a - b)];

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  return items.sort((a , b) => a - b); 

}

let memoizedSort = memoize(doSort);

// Look at the console and notice how it only
// prints 'doing the sort' once!

let numbers = [1, 7, 4, 2, 4, 9, 28, 3];
console.log(memoizedSort(numbers));
console.log(memoizedSort(numbers));
console.log(memoizedSort(numbers));


