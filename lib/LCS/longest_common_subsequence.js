function longestCommonSubsequence(str1, str2) {
  let m = str1.length, n = str2.length

  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
      }
    }
  }
  return dp[m][n]
}

// assert longestCommonSubsequence("abcde", "ace") == 3
