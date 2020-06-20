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

function binarySearch(arr, target) {
  function search(array, left, right, value) {
    if (left > right) {
      return -1
    }
  
    let mid = left + ((right - left) >> 1)
  
    if (array[mid] == value) {
      return mid
    } else if (array[mid] < value) {
      return search(array, mid + 1, right, value)
    } else {
      return search(array, left, mid - 1, value)
    }
  }

  return search(arr, 0, arr.length - 1, target)
}



console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 6))