// 动态规划之四键键盘

function maxA(N) {
  let dp = Array(N + 1).fill(0)

  for(let i = 1; i <= N; i++) {
    dp[i] = dp[i - 1] + 1

    for(let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j -  2] * (i - j + 1))
    }
  }
  return dp[N]
}

// console.log(maxA(15))
