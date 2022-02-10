const mySet = new Set()



mySet.add(1)
mySet.add(2)


console.log(mySet.keys())


for (const item of mySet.keys()) {
  console.log(item)
}


console.log(mySet.has(1))
console.log(mySet.has(3))





console.log(mySet.values())


const n = mySet.size

console.log(n)


const arry = Array.from(mySet)


console.log(arry)


const mySet2 = new Set([1, 2, 3, 4])

console.log(mySet2.size, mySet2.keys())


const a = [2, 3, 4, 5, 4, 4, 4]

const mySet3 = new Set(a)


for (const item of mySet3) {
  console.log(item)
}
