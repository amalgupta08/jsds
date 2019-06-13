const levelOrderTraversal = require('./methods/levelOrderTraversal');
const height = require('./methods/binaryTreeHeight');
const levelOrderInsertion = require('./methods/levelOrderInsertion');
const levelOrderDeletion = require('./methods/levelOrderDeletion');

module.exports = class BinaryTree {
    constructor() {
        this.root = null;
        Object.assign(this,
            levelOrderTraversal(this),
            height(this),
            levelOrderInsertion(this),
            levelOrderDeletion(this));
    }
};
