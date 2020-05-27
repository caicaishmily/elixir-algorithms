// 选择排序

/*
  从数组中选择最小元素，将它与数组的第一个元素交换位置。
  再从数组剩下的元素中选择出最小的元素，将它与数组的第二个元素交换位置。
  不断进行这样的操作，直到将整个数组排序。
*/

// O(n * n)

function selectSort(arr) {
  let n = arr.length
  if (n <= 1) return arr

  function swap(i, min) {
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }

  for(let i = 0; i < n - 1; i++) {
    let min = i

    for(let j = i + 1; j < n; j++)  {
      if(arr[j] < arr[min]) {
        min = j
      }
    }

    swap(i, min)
  }

  return arr
}

// console.log(selectSort([85, 24, 63, 45, 17, 31, 96, 50]))
