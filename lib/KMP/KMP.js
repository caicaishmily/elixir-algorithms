function KMP(txt, pat) {
  let M = pat.length, N = txt.length
  let X = 0, Y = 0
  let dp = Array(M).fill(0).map(() => Array(256).fill(0))

  dp[0][pat.charAt(0)] = 1

  for(let j = 1; j < M; j++) {
    for(let c = 0; c < 256; c++) {
      dp[j][c] = dp[X][c]
    }

    dp[j][pat.charAt(j)] = j + 1

    X = dp[X][pat.charAt(j)] === undefined ? 0 : dp[X][pat.charAt(j)]
  }

  for(let i = 0; i < N; i++) {
    Y = dp[Y][txt.charAt(i)] === undefined ? 0 : dp[Y][txt.charAt(i)]

    if(Y == M) {
      return i - M + 1
    }
  }

  return -1
}

// console.log(KMP("aaacaaab", "aab")) == -1
// console.log(KMP("aaacaaab", "aaab")) == 4
