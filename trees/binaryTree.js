class TreeNode {
  constructor(data) {
     this.data = data;
     this.left = null;
     this.right = null;
  };
};
class BinarySearchTree {
  constructor() {
     this.root = null;
  }

  insert(data) {
     const newTreeNode = new TreeNode(data);
     if (this.root === null) {
        this.root = newTreeNode;
     } else {
        this.insertTreeNode(this.root, newTreeNode);
     };
  };
  insertTreeNode(TreeNode, newTreeNode) {
     if(newTreeNode.data < TreeNode.data){
        if (TreeNode.left === null) {
           TreeNode.left = newTreeNode;
        } else {
           this.insertTreeNode(TreeNode.left, newTreeNode);
        };
     } else {
        if (TreeNode.right === null) {
           TreeNode.right = newTreeNode;
        } else {
           this.insertTreeNode(TreeNode.right,newTreeNode);
        };
     };
  };
};
const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(0);
BST.insert(2);
