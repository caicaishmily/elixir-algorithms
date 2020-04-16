//  给你一个整数 N。判断这个整数的位数排列组合是否有可被 8 整除的可能 ？
// 例如，如果数字 N＝123，则{ 123、132、213、231、312、321 } 是可能的位数排列组合。
// 对于每个测试案例，如果 N 的位数排列中存在可以被 8 整除的数字，则打印 YES；如果没有，则打印 NO。

function division_by_8(num) {
  if (num < 0) return "Invalid Input"
  if (Number.isInteger(num)) {
    let strArr = Array.from((num).toString())
    let fullPermutateArr = fullpermutate(strArr)
    let fullPermutateNumArr = fullPermutateArr.map(item => Number(item.join("")))
  	return fullPermutateNumArr.some(n => n % 8 === 0) ? "YES" : "NO"
  } else {
    return "Invalid Input"
  }
}

function fullpermutate(nums) {
  let res = []
  let visited = Array(nums.length).fill(false)
  let temp = []

  const dfs = function(depth) {
    if (depth === nums.length) {
      res.push(temp.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        temp.push(nums[i])
        visited[i] = true
        dfs(depth + 1)

        temp.pop()
        visited[i] = false
      }
    }
  }
  dfs(0)
  return res
}

console.log(division_by_8(2300))
