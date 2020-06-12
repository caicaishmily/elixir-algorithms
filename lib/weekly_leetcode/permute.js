function permutation(arr) {
  let result = []

  function backtrack(path, options) {
    if(path.length == arr.length) {
      result.push(Number(path.join("")))
    }

    for(let i = 0; i < options.length; i++) {
      path.push(options[i])
      backtrack(path.slice(), options.slice(0, i).concat(options.slice(i + 1)))
      path.pop()
    }
  }

  backtrack([], arr)
  return result
}

console.log(permutation([1, 2, 3]))
