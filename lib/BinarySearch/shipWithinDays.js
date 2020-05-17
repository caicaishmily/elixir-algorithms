function shipWithinDays(weights, D) {
  let left = Math.max(...weights), right = weights.reduce((item, acc) => item + acc) + 1

  function canFinish(w, d, cap) {
    let i = 0
    for(let day = 0; day < d; day++) {
      let maxCap = cap
      while((maxCap -= w[i]) >= 0) {
        i++
        if(i == w.length) {
          return true
        }
      }
    }

    return false
  }

  while(left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if(canFinish(weights, D, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5))
