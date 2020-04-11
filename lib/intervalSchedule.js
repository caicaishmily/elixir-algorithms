// 区间调度
function intervalSchedule(intvs) {
  if(intvs.length == 0) return 0

  intvs.sort((a, b) => a[1] - b[1])

  let count = 1
  let x_end = intvs[0][1]

  for(let i = 0; i < intvs.length; i++) {
    let start = intvs[i][0]
    if(start >= x_end) {
      count++;
      x_end = intvs[i][1]
    }
  }

  return count
}

// console.log(intervalSchedule([[2, 4], [3, 6], [1, 3], [1, 2], [5, 7]])) == 3
// console.log(intervalSchedule([[2, 4], [3, 6], [1, 3]])) == 2
