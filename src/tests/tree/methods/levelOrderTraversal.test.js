const BinaryTree  = require('../../../js/tree/BinaryTree');
const Node = require('../../../js/tree/Node');


test('tree lever order traversal', () => {
    let tree = new BinaryTree();

    expect(tree.levelOrderTraversal(tree.root)).toEqual([]);

    tree.root = new Node(1);
    tree.root.left= new Node(2); 
    tree.root.right= new Node(3); 
    tree.root.left.left= new Node(4); 
    tree.root.left.right= new Node(5); 

    expect(tree.levelOrderTraversal(tree.root)).toEqual([1, 2, 3, 4, 5]);
});