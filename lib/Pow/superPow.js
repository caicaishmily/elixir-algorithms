const base = 1337

function superPow(a, b) {
  myPow = (a, k) => {
    a %= base
    let res = 1

    for(let _ = 0; _ < k; _++){
      res *= a
      res %= base
    }

    return res
  }

  if(b.length == 0) return 1

  let last = b[b.length - 1]
  b.pop()

  let part1 = myPow(a, last)
  let part2 = myPow(superPow(a, b), 10)

  return (part1 * part2) % base
}

function superPow2(a, b) {
  myPow = (a, k) => {
    if(k == 0) return 1

    a %= base

    if(k % 2 == 1) {
      return (a * myPow(a, k - 1)) % base
    } else {
      let sub = myPow(a, k / 2)
      return (sub * sub) % base
    }
  }

  if(b.length == 0) return 1

  let last = b[b.length - 1]
  b.pop()

  let part1 = myPow(a, last)
  let part2 = myPow(superPow(a, b), 10)

  return (part1 * part2) % base
}


console.log(superPow2(2, [1, 0]))
