function validParentheses(str) {
  let left = []

  function isEmpty(arr) {
    return arr.length === 0 ? true : false
  }

  function leftOf(s) {
    if(s == "}") return "{"
    if(s == ")") return "("
    return "["
  }

  function top(stack) {
    return stack[stack.length - 1]
  }

  for(let i of str) {
    if(i == "[" || i == "(" || i == "{") {
      left.push(i)
    } else {
      if(!isEmpty(left) && leftOf(i) === top(left)) {
        left.pop()
      } else {
        return false
      }
    }
  }

  return isEmpty(left)
}

console.log(validParentheses("{}()"))
