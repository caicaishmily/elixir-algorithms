function trap(height) {
  let n = height.length

  let ans = 0

  for(let i = 0; i < n - 1; i++) {
    let l_max = 0, r_max = 0

    for(let j = i; j < n; j++) {
      r_max = Math.max(r_max, height[j])
    }

    for(let j = i; j >= 0; j--) {
      l_max = Math.max(l_max, height[j])
    }

    ans += Math.min(l_max, r_max) - height[i]
  }

  return ans
}

function trap_with_dp(height) {
  let n = height.length
  if(n == 0) return 0

  let ans = 0

  let l_max_arr = Array(n), r_max_arr = Array(n)

  l_max_arr[0] = height[0]
  r_max_arr[n - 1] = height[n - 1]

  for(let i = 1; i < n; i++) {
    l_max_arr[i] = Math.max(height[i], l_max_arr[i - 1])
  }

  for(let j = n - 2; j >= 0; j--) {
    r_max_arr[j] = Math.max(height[j], r_max_arr[j + 1])
  }

  for(let i = 1; i < n - 1; i++) {
    ans += Math.min(l_max_arr[i], r_max_arr[i]) - height[i]
  }

  return ans
}

function trap_with_2_pointer(height) {
  let n = height.length
  if(n == 0) return 0
  let left = 0, right = n - 1, ans = 0

  let l_max = height[0], r_max = height[n - 1]

  while(left <= right) {
    l_max = Math.max(l_max, height[left])
    r_max = Math.max(r_max, height[right])

    if(l_max < r_max) {
      ans += l_max - height[left]
      left++
    } else {
      ans += r_max -height[right]
      right--
    }
  }

  return ans
}

console.log(trap_with_2_pointer([0,1,0,2,1,0,1,3,2,1,2,1]))
