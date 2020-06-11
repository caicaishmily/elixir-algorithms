function maxDepth(root) {
  if(root == null) {
    return 0
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}


function minDepth(root) {
  if(root == null) {
    return 0
  } else if (root.left == null) {
    return 1 + minDepth(root.right)
  } else if (root.right == null) {
    return 1 + minDepth(root.left)
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}
