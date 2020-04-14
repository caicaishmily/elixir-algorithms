// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

function maxProfit(prices) {
  let p = prices.length
  let dp = Array(p).fill(0).map(() => Array(2).fill(0))

  for(let i = 0; i < p; i++) {
    if(i - 1 == -1) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }

  return dp[p - 1][0]
}

// console.log(maxProfit([7,1,5,3,6,4])) == 5
// console.log(maxProfit([7,6,4,3,1])) == 0

