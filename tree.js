class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


/**
 * Build binary Tree
 * @param {string} str - level order input
 * @return {TreeNode} root - root
 */

const buildTree_level = (str) => {

  if (!str) {
    return null
  }
  const data = str.split(',')
  const root = new TreeNode(Number(data[0]))
  const queue = [root]
  let i = 1

  while (queue.length > 0) {
    const node = queue.shift()
    if (i < data.length && data[i] !== '') {
      const left = new TreeNode(Number(data[i]))
      node.left = left
      queue.push(node.left)
    }
    i += 1

    if (i < data.length && data[i] !== '') {
      const right = new TreeNode(Number(data[i]))
      node.right = right
      queue.push(node.right)
    }
    i += 1
  }
  return root
}





/**
 * binary Tree level order traversal
 * @param {TreeNode} root - level order input
 * @return {number[]}  - vals
 */
const levelOrder = (root) => {
  const res = []

  const q = [root]


  while (q.length > 0) {
    const node = q.shift()
    res.push(node.val)
    if (node.left) {
      q.push(node.left)
    }

    if (node.right) {
      q.push(node.right)
    }
  }

  return res
}

/**
 * binary Tree preOrder
 * @param {TreeNode} root - tree root node
 * @return {number[]}  - vals
 */
const preOrderDFS = (root) => {
  const res = []

  const preOrder = (node) => {
    if (node === null) {
      return
    }

    res.push(node.val)

    preOrder(node.left)
    preOrder(node.right)
  }

  preOrder(root)

  return res
}


/**
 * binary Tree inorder
 * @param {TreeNode} root - tree root node
 * @return {number[]}  - vals
 */
const inOrderDFS = (root) => {
  const res = []

  const inOrder = (node) => {
    if (node === null) {
      return
    }
    inOrder(node.left)
    res.push(node.val)
    inOrder(node.right)
  }
  inOrder(root)
  return res
}


/**
 * binary Tree inorder
 * @param {TreeNode} root - tree root node
 * @return {number[]}  - vals
 */
const postOrderDFS = (root) => {
  const res = []

  const postOrder = (node) => {
    if (node === null) {
      return
    }
    postOrder(node.left)
    postOrder(node.right)
    res.push(node.val)
  }
  postOrder(root)
  return res
}





const root = buildTree_level('1,2,3,,,4,5,6,7,,,,,,')



console.log(postOrderDFS(root))


module.exports = { TreeNode, levelOrder, inOrderDFS, postOrderDFS, preOrderDFS }