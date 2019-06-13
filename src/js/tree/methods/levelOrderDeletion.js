module.exports = (tree) => {
    return {
        levelOrderDeletion: (data) => {
            const queue = [];
            queue.push(tree.root);
            let temp;
            let nodeToDelete;
            while (queue.length) {
                temp = queue.shift();
                if (temp.data === data) {
                    nodeToDelete = temp;
                }
                if (temp.left != null) {
                    queue.push(temp.left);
                }
                if (temp.right != null) {
                    queue.push(temp.right);
                }
            }
            const val = temp.data;
            deleteNode(tree.root, temp);
            nodeToDelete.data = val;
        },
    };
};
function deleteNode(root, nodeToDelete) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const temp = queue.shift();
        if (temp.data === nodeToDelete.data) {
            temp = null;
            break;
        }
        if (temp.right != null ) {
            if (temp.right.data == nodeToDelete.data) {
                temp.right = null;
                break;
            } else {
                queue.push(temp.right);
            }
        }
        if (temp.left !=null ) {
            if (temp.left.data == nodeToDelete.data) {
                temp.left = null;
                break;
            } else {
                queue.push(temp.left);
            }
        }
    }
}
