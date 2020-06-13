function gzipString(str) {
  let res = []
  res[0] = [str[0]]
  let cur = 0

  for(let i = 1; i < str.length; i++) {
    if(res[cur].includes(str[i])) {
      res[cur].push(str[i])
    } else {
      cur += 1
      res[cur] = [str[i]]
    }
  }

  let gzipStr = res.map(item => (
    item.length > 1 ? item[0] + item.length : item.join("")
  ))

  return gzipStr.join("")
}

console.log(gzipString('ccccaaabbbaa')) == "c4a3b3a2"
