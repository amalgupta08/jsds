const BinaryTree = require('../../../js/tree/BinaryTree');
const Node = require('../../../js/tree/Node');


test('tree lever order insertion and traversal', () => {
    const tree = new BinaryTree();

    expect(tree.levelOrderTraversal(tree.root)).toEqual([]);

    tree.levelOrderInsertion(new Node(1));

    expect(tree.levelOrderTraversal(tree.root)).toEqual([1]);

    tree.levelOrderInsertion(new Node(2));
    tree.levelOrderInsertion(new Node(3));
    tree.levelOrderInsertion(new Node(4));
    tree.levelOrderInsertion(new Node(5));

    expect(tree.levelOrderTraversal(tree.root)).toEqual([1, 2, 3, 4, 5]);
});

test('tree lever order deletion', () => {
    const tree = new BinaryTree();

    expect(tree.levelOrderTraversal(tree.root)).toEqual([]);

    tree.levelOrderInsertion(new Node(1));
    tree.levelOrderInsertion(new Node(2));
    tree.levelOrderInsertion(new Node(3));
    tree.levelOrderInsertion(new Node(4));
    tree.levelOrderInsertion(new Node(5));

    expect(tree.levelOrderTraversal(tree.root)).toEqual([1, 2, 3, 4, 5]);

    tree.levelOrderDeletion(1);

    expect(tree.levelOrderTraversal(tree.root)).toEqual([5, 2, 3, 4]);
});
