module.exports = (tree) => {
    return {
        levelOrderTraversal: () => {
            const h = tree.height(tree.root);
            const path = [];
            for (let i = 1; i <= h; i++) 
                tree.printGivenLevel(tree.root, i, path);
            return path
        },
        printGivenLevel:(root, level, path) => { 
            if (root == null) 
                return; 
            if (level == 1) {
                path.push(root.data);
            }
            else if (level > 1) 
            { 
                tree.printGivenLevel(root.left, level-1, path); 
                tree.printGivenLevel(root.right, level-1, path); 
            } 
        } 
    }
}