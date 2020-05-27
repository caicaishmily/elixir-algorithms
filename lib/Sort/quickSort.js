// 快速排序

/*

思想----分治法

1. 先从数列中取出一个数作为基准数。
2. 分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
3. 再对左右区间重复第二步，直到各区间只有一个数。

*/

// O(NlogN)

function quickSort(arr) {
  if(arr.length <= 1) return arr
  let left = [], right = []

  let pivotIndex = Math.floor(arr.length / 2)

  let pivot = arr.splice(pivotIndex, 1)[0]

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

// console.log(quickSort([85, 24, 63, 45, 17, 31, 96, 50]))
