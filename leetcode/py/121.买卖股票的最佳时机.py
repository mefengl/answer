#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] 买卖股票的最佳时机
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        dp = [[0] * 2 for _ in range(n)]
        # 第一天就买入
        dp[0][1] = -prices[0]
        for i in range(1, n):
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
            # 只能买一次
            # dp[i][1] = max(dp[i-1][1],dp[i-1][0]-prices[i-1])
            dp[i][1] = max(dp[i - 1][1], -prices[i])
        return dp[-1][0]


# @lc code=end
