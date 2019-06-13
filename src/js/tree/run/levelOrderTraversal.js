const BinaryTree  = require('../BinaryTree');
const Node = require('../Node');

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left= new Node(2); 
tree.root.right= new Node(3); 
tree.root.left.left= new Node(4); 
tree.root.left.right= new Node(5); 

console.log('level order traversal ');
const path = tree.levelOrderTraversal(tree.root);
console.log(path.join(' '));