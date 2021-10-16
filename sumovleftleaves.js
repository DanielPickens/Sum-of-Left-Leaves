var sumOfLeftLeaves = (root, sum) => {
 return traverse(root, false);
}

let traverse = (node, isLeft) => {
	if(node == null) {
		return 0;
	}

	/*
1.  if node is a leaf node, then check if it's the left child since we only want to sum up left leaf node values
2.  if it's a right leaf node, return 0 so it wont impact the total sum.
	 */
	if(node.left == null && node.right == null) {
		if(isLeft) {
			return node.val;
		} else {
			return 0;
		}
	}

	var leftSum = traverse(node.left, true);
	var rightSum = traverse(node.right, false);

	return leftSum + rightSum;
}


/*
Success
Details 
Runtime: 72 ms, faster than 92.20% of JavaScript online submissions for Sum of Left Leaves.
Memory Usage: 40.9 MB, less than 12.34% of JavaScript online submissions for Sum of Left Leaves.
*/
