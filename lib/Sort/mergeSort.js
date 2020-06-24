function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, mid)
  const rightArray = arr.slice(mid)

  function merge(leftArr, rightArr) {
    let tempArr = [], left = 0,  right = 0

    while (left < leftArr.length && right < rightArr.length) {
      if (leftArr[left] < rightArr[right]) {
        tempArr.push(leftArr[left])
        left++
      } else {
        tempArr.push(rightArr[right])
        right++
      }
    }

    return tempArr.concat(leftArr.slice(left)).concat(rightArr.slice(right))
  }

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}


console.log(mergeSort([85, 24, 63, 45, 17, 31, 96, 50]))
