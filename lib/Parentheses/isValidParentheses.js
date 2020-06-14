function isValid(str) {
  if(str.length < 1) {
    return false
  }

  let res = []
  res.push(str[0])

  for(let i = 1; i < str.length; i++) {
    if (str[i] == "(") {
      res.push(str[i])
    } else if (str[i] == ")") {
      if(res[0] == "(") {
        res.pop()
      } else {
        return false
      }
    }
  }

  return res.length > 0 ? false : true
}

console.log(isValid(")))))"))
