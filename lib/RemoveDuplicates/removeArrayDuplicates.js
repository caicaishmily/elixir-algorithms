function removeArrayDuplicates(nums) {
  let n = nums.length
  if(n == 0) return 0

  let slow = 0, fast = 1

  while(fast < n) {
      if(nums[fast] != nums[slow]) {
          slow++
          nums[slow] = nums[fast]
      }
      fast++
  }

  return slow + 1
}

console.log(removeArrayDuplicates([1,1,2]))
console.log(removeArrayDuplicates([0,0,1,1,1,2,2,3,3,4]))
