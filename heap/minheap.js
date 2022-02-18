
class MinHeap {
  constructor(compacity) {
    this.storage = new Array(compacity).fill(null)
    this.compacity = compacity
    this.size = 0
  }

  insert(data) {
    if (this.isFull()) {
      return false
    }

    this.storage[this.size] = data
    this.size += 1

    this.heapifyUp(this.size - 1)
    return true
  }


  pop() {
    if (this.size === 0) {
      return
    }

    const data = this.storage[0]
    this.storage[0] = this.storage[this.size - 1]
    this.heapifyDown(0)
    this.size -= 1
    return data
  }


  heapifyDown(index) {

    //! reach leaf node
    if (!this.hasLeftChild(index)) {
      return
    }

    let smaller_index = this.leftChildIndex(index)

    if (this.hasRightChild(index) && this.storage[this.rightChildIndex[index]] < this.storage[this.leftChildIndex[index]]) {
      smaller_index = this.rightChildIndex(index)
    }

    if (this.storage[index] > this.storage[smaller_index]) {
      this.swap(index, smaller_index)
      this.heapifyDown(smaller_index)
    }


  }


  heapifyUp(index) {
    if (this.hasParent(index) && this.storage[this.parentIndex(index)] > this.storage[index]) {
      this.swap(index, this.parentIndex(index))
      this.heapifyUp(this.parentIndex(index))
    }
  }




  swap(i, j) {
    const tmp = this.storage[j]
    this.storage[j] = this.storage[i]
    this.storage[i] = tmp
  }




  parentIndex(i) {
    return Math.floor(i - 1 / 2)
  }

  leftChildIndex(i) {
    return 2 * i + 1
  }

  rightChildIndex(i) {
    return 2 * i + 2
  }

  hasParent(i) {
    return this.parentIndex(i) >= 0
  }

  hasLeftChild(i) {
    return this.leftChildIndex(i) < this.size
  }

  hasRightChild(i) {
    return this.rightChildIndex(i) < this.size
  }

  isFull() {
    return this.size === this.compacity
  }

}


const min_h = new MinHeap(4)

min_h.insert(1)

min_h.insert(-1)
min_h.pop(0)

console.log(min_h.storage, min_h.size)