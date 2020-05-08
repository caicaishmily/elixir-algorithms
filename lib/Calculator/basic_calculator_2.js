function calculator(s) {

  function helper(s) {
    let stack = []
    let sign = "+"
    let num = 0
    let arr = Array.from(s)

    while(arr.length > 0) {
      let c = arr.shift()

      if(isDigit(c)) {
        num = 10 * num + (c - 0)
      }

      if((!isDigit(c) && c != " ") || arr.length == 0) {
        if(sign == "+") {
          stack.push(num)
        } else if(sign == "-") {
          stack.push(-num)
        } else if(sign == "*") {
          stack[stack.length - 1] *= num
        } else if(sign == "/") {
          let prev = stack[stack.length - 1]
          let result = prev / num

          result > 0
          ? stack[stack.length - 1] = Math.floor(result)
          : stack[stack.length - 1] = Math.ceil(result)
        }
        num = 0
        sign = c
      }
    }
    return sum(stack)
  }

  function sum(arr){
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  }

  function isDigit(str) {
    return /^\d+$/.test(str)
  }

  return helper(s)
}

// console.log(calculator("3*2"))
// console.log(calculator(" 3/2 "))
// console.log(calculator("3+5 / 2"))
