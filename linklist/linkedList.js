class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}


class DoubleListNode {
  constructor(val = 0, prev = null, next = null) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}


const buildLinkedList = (nums) => {
  const dummyNode = new ListNode()

  let curr = dummyNode

  for (const num of nums) {
    curr.next = new ListNode(num)
    curr = curr.next
  }

  return dummyNode.next
}


const printList = (head) => {
  res = []

  while (head) {
    res.push(head.val)
    head = head.next
  }


  return res.join('->')
}



module.exports = {
  ListNode,
  DoubleListNode,
  buildLinkedList,
  printList
}