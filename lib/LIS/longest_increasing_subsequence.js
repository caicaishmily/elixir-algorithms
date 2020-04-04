// 动态规划
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

// 二分查找
function longestIncreasingSubsequence(array) {
  let top = new Array(array.length)
  let piles = 0 // 初始化牌堆数

  for (let i = 0; i < array.length; i++) {
    let poker = array[i]
    let left = 0
    let right = piles

    while(left < right) {
      let mid = Math.floor((left + right) / 2)
      if (top[mid] > poker) {
        right = mid
      } else if (top[mid] < poker) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    if (left == piles) piles++
    top[left] = poker
  }
  return piles
}

