const { buildLinkedList, printList } = require('./linkedList');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head.next === null) {
    return head
  }

  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
};

/**
 * 
 * iterative
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

  let prev = null

  while (head) {
    tmp = head.next
    head.next = prev
    prev = head
    head = tmp
  }

  return prev
};




const head = buildLinkedList([1, 2, 3, 4, 5,])

console.log(printList(head))

console.log(printList(reverseList(head)))