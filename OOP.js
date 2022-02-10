export class LRU {


  // private field
  #privateA

  static B = 12_000

  constructor(a, b) {
    this.a = a
    this.b = b
    this.#privateA = a + b
  }



  privateA() {
    return this.#privateA
  }

}


export class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }



  // getter
  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width
  }

}


const lru = new LRU(1, 2)
console.log(lru.privateA())
console.log(LRU.B)





const rec = new Rectangle(1, 2)


