// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

function maxProfit(prices) {
  let p = prices.length
    let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < p; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, -prices[i])
    }

    return dp_i_0
}

// console.log(maxProfit([7,1,5,3,6,4])) == 5
// console.log(maxProfit([7,6,4,3,1])) == 0

