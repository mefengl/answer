#
# @lc app=leetcode.cn id=230 lang=python3
#
# [230] 二叉搜索树中第K小的元素
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.res = 0
        self.rank = 0

    def traverse(self, root: Optional[TreeNode], k: int) -> None:
        if root is None:
            return
        self.traverse(root.left, k)
        self.rank += 1
        if self.rank == k:
            self.res = root.val
            return
        self.traverse(root.right, k)

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.traverse(root, k)
        return self.res


# @lc code=end
