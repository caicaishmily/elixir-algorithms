function isMatch(str, pattern){
  let memo = {}

  dp = (i, j) => {
    if (Object.keys(memo).includes(i + '' + j)) {
      return memo[`${i} + '' + ${j}`]
    }
    if (j == pattern.length)
       return i == str.length

    let first = i < str.length && [str[i], '.'].includes(pattern[j])
    let ans

    if(j <= pattern.length - 2 && pattern[j + 1] == "*") {
      ans = dp(i, j + 2) || first && dp(i + 1, j)
    } else {
      ans = first && dp(i + 1, j + 1)
    }

    memo[i + '' + j] = ans
    return ans
  }

  return dp(0, 0) || false
  // 这里为什么需要返回 false 因为我们构造备忘录 memo 的时候 只是判断了 (i, j) 组合的 key 是否存在
  // 但是实际上它的 值是默认的 undefined 所有需要 将 undefined 转换为 false
}

// console.log(isMatch("mississippi", "mis*is*p*."))
// console.log(isMatch("aaaaaaaaaaaaab","a*a*a*a*a*a*a*a*a*a*c"))
