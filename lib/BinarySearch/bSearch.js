// 查找第一个值等于给定值的元素
function binarySearchFirst(arr, target) {
  let left = 0, right = arr.length - 1

  while(left <= right) {
    let mid = left + ((right - left) >> 1)

    if(arr[mid] > target) {
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      if (mid == 0 || arr[mid - 1] != target) {
        return mid
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

// console.log(binarySearchFirst([1,2,4,6,8,8,8,10], 18))

// 查找最后一个值等于给定值的元素

function binarySearchLast(arr, target) {
  let left = 0, right = arr.length - 1

  while(left <= right) {
    let mid = left + ((right - left) >> 1)

    if (arr[mid] < target) {
      left = mid + 1
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      if ((mid == arr.length - 1) || (arr[mid + 1] != target)) {
        return mid
      } else {
        left = mid + 1
      }
    }
  }

  return -1
}

// console.log(binarySearchLast([1,2,4,6,8,8,8,10], 8))

function binarySearchFirstGreater(arr, target) {
  let left = 0, right = arr.length - 1

  while(left <= right) {
    let mid = left + ((right - left) >> 1)

    if (arr[mid] >= target) {
      if(mid == 0 || arr[mid - 1] < target) {
        return mid
      } else {
        right = mid - 1
      }
    } else {
      left = mid + 1
    }
  }

  return -1
}

// console.log(binarySearchFirstGreater([1,2,4,6,8,8,8,10], 5))

function binarySearchLastLess(arr, target) {
  let left = 0, right = arr.length - 1

  while(left <= right) {
    let mid = left + ((right - left) >> 1)

    if (arr[mid] > target) {
      right = mid - 1
    } else {
      if(mid == arr.length - 1 || arr[mid + 1] > target) {
        return mid
      } else {
        left = mid + 1
      }
    }
  }

  return -1
}

console.log(binarySearchLastLess([1,2,4,6,8,8,8,10], 5))
