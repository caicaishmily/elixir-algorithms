function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1

  while(left <= right) {
    let mid = left + ((right - left) >> 1)
    
    if(arr[mid] == target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1 
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 20))