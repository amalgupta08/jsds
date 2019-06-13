const BinaryTree  = require('../BinaryTree');
const Node = require('../Node');

let tree = new BinaryTree();
tree.levelOrderInsertion(new Node(1));
tree.levelOrderInsertion(new Node(2));
tree.levelOrderInsertion(new Node(3));
tree.levelOrderInsertion(new Node(4));
tree.levelOrderInsertion(new Node(5));

console.log('level order traversal ');
const path = tree.levelOrderTraversal(tree.root);
console.log(path.join(' '));

tree.levelOrderDeletion(1);
const path2 = tree.levelOrderTraversal(tree.root);
console.log(path2.join(' '));