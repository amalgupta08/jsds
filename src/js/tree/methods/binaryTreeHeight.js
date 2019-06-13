module.exports = (tree) => {
    return {
        height: (root) => {
            if (root == null) {
                return 0;
            } else {
                /* compute  height of each subtree */
                const lheight = tree.height(root.left);
                const rheight = tree.height(root.right);

                /* use the larger one */
                if (lheight > rheight) {
                    return lheight + 1;
                } else return rheight + 1;
            }
        },
    };
};
