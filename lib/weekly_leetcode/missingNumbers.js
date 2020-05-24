function missingNumbers(nums) {
  let n = nums.length
  let res = 0
  res ^= n

  for(let i = 0; i < n; i++) {
    res ^= i ^ nums[i]
  }

  return res
}

// console.log(missingNumbers([0,1]))

function missingNumbers_1(nums) {
  let n = nums.length
  // 利用等差数列公式 sum(0..n) - sum(nums) 即是要求的答案
  let expect = (0 + n) * (n + 1) / 2
  let sum = 0
  for(let i = 0; i < n; i++) {
    sum += nums[i]
  }

  return expect - sum
}

// console.log(missingNumbers_1([9,6,4,2,3,5,7,0,1]))

function missingNumbers_2(nums) {
  let n = nums.length
  let res = 0
  res += n - 0

  for(let i = 0; i < n; i++) {
    res += i - nums[i]
  }

  return res
}

// console.log(missingNumbers_2([9,6,4,2,3,5,7,0,1]))
