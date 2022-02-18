const { buildLinkedList, printList, ListNode } = require('./linkedList');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p1 = list1
  let p2 = list2

  let dummyNode = new ListNode()
  let curr = dummyNode


  while (p1 && p2) {
    if (p1.val < p2.val) {
      curr.next = new ListNode(p1.val)
      p1 = p1.next
    } else {
      curr.next = new ListNode(p2.val)
      p2 = p2.next
    }

    curr = curr.next
  }

  if (p1) {
    curr.next = p1
  } else {
    curr.next = p2
  }

  return dummyNode.next
};

const a = [1, 2, 4]
const b = [1, 3, 4]

const list1 = buildLinkedList(a)
const list2 = buildLinkedList(b)

const newList = mergeTwoLists(list1, list2)


console.log(printList(newList))