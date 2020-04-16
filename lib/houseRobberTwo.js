function rob(nums) {
  let len = nums.length
  if(len == 1) return nums[0]

  const robRange = (nums, start, end) => {
    let dp_i_1 = 0, dp_i_2 = 0
    let dp_i = 0

    for(let i = end; i >= start; i--) {
      dp_i = Math.max(dp_i_1, nums[i] + dp_i_2)
      dp_i_2 = dp_i_1
      dp_i_1 = dp_i
    }
    return dp_i
  }

  return Math.max(robRange(nums, 0, len -2 ), robRange(nums, 1, len - 1))
}

// console.time("answer time");
// console.log(rob([2,3,2]))
// console.timeLog("answer time");
