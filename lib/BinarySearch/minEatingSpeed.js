function minEatingSpeed(piles, H) {
  const max = Math.max(...piles)
  if(piles.length == max) return max

  let left = 1, right = max + 1

  function canFinish(piles, speed, H) {
    let time = 0

    for(let n of piles) {
      time += timeOf(n, speed)
    }

    return time <= H
  }

  function timeOf(n, speed) {
    return Math.floor(n / speed) + ((n % speed > 0) ? 1 : 0)
  }

  while(left < right) {
    let mid = left + Math.floor((right - left) / 2)

    if(canFinish(piles, mid, H)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
