const levelOrderTraversal = require('./methods/levelOrderTraversal');
const height = require('./methods/binaryTreeHeight');

module.exports = class BinaryTree {
    constructor() {
        this.root = null;
        Object.assign(this,
            levelOrderTraversal(this),
            height(this));
    }
}