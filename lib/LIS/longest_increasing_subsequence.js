function longestIncreasingSubsequence(array) {
  const dp = new Array(array.length).fill(1)

  for(let i = 0; i < array.length; i++ ){
    for(let j = 0; j < i; j++) {
      if(array[i] > array[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  let res = 0
  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i])
  }
  return res
}
