// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/house-robber

// 第一版实现 存在重叠子问题 dp(nums, start + 1) 和 dp(nums, start + 2)
function rob(nums) {
  return dp(nums, 0)
}

function dp(nums, start) {
  if(start >= nums.length) {
    return 0
  }

  return Math.max(dp(nums, start + 1), nums[start] + dp(nums, start + 2))
}

// console.log(rob([2,7,9,3,1]))
// console.time("answer time");
// console.log(rob([1,2,3,1]))
// console.timeLog("answer time");

// 第二版实现 自顶向下的动态规划解法

function rob_top_to_bottom(nums) {
  let memo = Array(nums.length).fill(-1)

  const dp = (nums, start) => {
    if(start >= nums.length) return 0
    if(memo[start] != -1) return memo[start]

    let res =  Math.max(dp(nums, start + 1), nums[start] + dp(nums, start + 2))

    memo[start] = res
    return res
  }

  return dp(nums, 0)
}

// console.time("answer time");
// console.log(rob_top_to_bottom([1,2,3,1]))
// console.timeLog("answer time");

// 自底向上
function rob_bottom_to_top(nums) {
  let n = nums.length

  let dp = Array(n + 2).fill(0)

  for(let i = n - 1; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2])
  }
  return dp[0]
}

// console.time("answer time");
// console.log(rob_bottom_to_top([1,2,3,1]))
// console.timeLog("answer time");

//  O(1)
function rob_update(nums) {
  let n = nums.length
  let dp_i_1 = 0, dp_i_2 = 0
  let dp_i = 0

  for(let i = 0; i < n; i++) {
    dp_i = Math.max(dp_i_1, nums[i] + dp_i_2)
    dp_i_2 = dp_i_1
    dp_i_1 = dp_i
  }

  return dp_i
}

// console.time("answer time");
// console.log(rob_update([1,2,3,1]))
// console.timeLog("answer time");
