// 你和你的朋友面前有一排石头堆，用一个数组 piles 表示，piles[i] 表示第 i 堆石子有多少个。你们轮流拿石头，一次拿一堆，但是只能拿走最左边或者最右边的石头堆。所有石头被拿完后，谁拥有的石头多，谁获胜。

// 石头的堆数可以是任意正整数，石头的总数也可以是任意正整数，这样就能打破先手必胜的局面了。比如有三堆石头 piles = [1, 100, 3]，先手不管拿 1 还是 3，能够决定胜负的 100 都会被后手拿走，后手会获胜。

// 假设两人都很聪明，请你设计一个算法，返回先手和后手的最后得分（石头总数）之差。比如上面那个例子，先手能获得 4 分，后手会获得 100 分，你的算法应该返回 -96。

function stoneGame(piles) {
  let n = piles.length

  let dp = new Array(n).fill(0).map(() => new Array(n).fill({f: 0, s: 0}))

  for(let i = 0; i < n; i++) {
    dp[i][i] = { f: piles[i], s: 0}
  }

  for(let m = 2; m <= n; m++) {
    for(let i = 0; i <= n - m; i++) {
      let j = m + i - 1

      let left = piles[i] + dp[i + 1][j].s
      let right = piles[j] + dp[i][j - 1].s

      if(left > right) {
        dp[i][j] = {f: left, s: dp[i + 1][j].f}
      } else {
        dp[i][j] = {f: right, s: dp[i][j - 1].f}
      }
    }
  }

  let res = dp[0][n - 1]
  return res.f - res.s
}

// console.log(stoneGame([3, 9, 1, 2]));
// assert stoneGame([3, 9, 1, 2]) == 7;
