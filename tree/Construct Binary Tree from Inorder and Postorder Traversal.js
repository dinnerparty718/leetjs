const { TreeNode, inOrderDFS, postOrderDFS } = require('../tree')
//! build right first


/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {

  const inOrder_hash = {}

  for (let [i, val] of inorder.entries()) {
    inOrder_hash[val] = i
  }
  const helper = (start, end) => {
    if (start > end) {
      return null
    }

    const node = new TreeNode(postorder.pop())
    node.right = helper(inOrder_hash[node.val] + 1, end)
    node.left = helper(start, inOrder_hash[node.val] - 1)
    return node
  }

  return helper(0, inorder.length - 1)
};



var buildTree2 = function (inorder, postorder) {
  let hash = {};
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

  let recur = function (start, end) {
    if (start > end) return null;
    let val = postorder.pop();
    let root = new TreeNode(val);
    root.right = recur(hash[val] + 1, end);
    root.left = recur(start, hash[val] - 1);
    return root;
  }

  return recur(0, inorder.length - 1);
};



const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]


const root = buildTree(inorder, postorder)


console.log(inOrderDFS(root))
