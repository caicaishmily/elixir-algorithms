// 冒泡排序
/*
  从左到右不断交换相邻逆序的元素，在一轮的循环之后，可以让未排序的最大元素上浮到右侧。

  在一轮循环中，如果没有发生交换，那么说明数组已经是有序的，此时可以直接退出。
*/

// O(n * n)

function bubbleSort(arr) {
  let n = arr.length

  function swap(i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  let isSorted  = false
  for(let i = n - 1; i > 0  && !isSorted; i--) {
    isSorted = true
    for(let j = 0; j < i; j++) {
      if(arr[j + 1] < arr[j]) {
        isSorted = false
        swap(j, j + 1)
      }
    }
  }

  return arr
}

console.log(bubbleSort([85, 24, 63, 45, 17, 31, 96, 50]))
