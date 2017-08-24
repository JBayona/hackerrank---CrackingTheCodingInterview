/*
https://www.hackerrank.com/challenges/ctci-is-binary-search-tree
*/

/*
Check out the resources on the page's right side to learn more about binary search trees. The video tutorial is by Gayle Laakmann McDowell, author of the best-selling interview book Cracking the Coding Interview.
For the purposes of this challenge, we define a binary search tree to be a binary tree with the following ordering properties:

The  value of every node in a node's left subtree is less than the data value of that node.
The  value of every node in a node's right subtree is greater than the data value of that node.
Given the root node of a binary tree, can you determine if it's also a binary search tree?

Complete the function in your editor below, which has  parameter: a pointer to the root of a binary tree. It must return a boolean denoting whether or not the binary tree is a binary search tree. You may have to write one or more helper functions to complete this challenge.

Note: We do not consider a binary tree to be a binary search tree if it contains duplicate values.*/

/* Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.  

The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
     }
*/
boolean checkBST(Node root) {
	return isBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

boolean isBST(Node node, int MIN, int MAX){
	if(node == null) return true;
	if(node.data <= MIN || node.data >= MAX) return false;
	return isBST(node.left, MIN, node.data) && isBST(node.right, node.data, MAX);
}
