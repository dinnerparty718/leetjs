const { TreeNode, inOrderDFS } = require('../tree')

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {

  return new TreeNode(9)
};


const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]


const root = buildTree(inorder, postorder)


console.log(inOrderDFS(root))
