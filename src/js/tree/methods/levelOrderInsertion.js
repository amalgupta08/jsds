module.exports = (tree) => {
    return {
        levelOrderInsertion: (node) => {
            if (tree.root === null) {
                tree.root = node;
                return;
            }
            const queue = [];
            queue.push(tree.root);
            while (queue.length) {
                const temp = queue.shift();
                if (temp.left == null) {
                    temp.left = node;
                    break;
                } else {
                    queue.push(temp.left);
                }
                if (temp.right == null) {
                    temp.right = node;
                    break;
                } else {
                    queue.push(temp.right);
                }
            }
        },
    };
};
