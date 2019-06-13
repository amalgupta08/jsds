module.exports = (tree) => {
    return {
        levelOrderTraversal: () => {
            const path = [];
            const queue = [];
            queue.push(tree.root);
            while(queue.length != 0) {
                const node  = queue.shift();
                if (node !== null) {
                    path.push(node.data);
                    queue.push(node.left);
                    queue.push(node.right);
                }
                
            }
            return path;
        }
    }
}