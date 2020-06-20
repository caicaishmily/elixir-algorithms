# 二分查找（上）

## 介绍
二分查找（Binary Search）算法，也叫折半查找。其基本原理是：每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。

## 时间复杂度
O(logN)

## 递归实现
```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1

  while(left <= value) {
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
```
## 非递归实现
```js
function binarySearch(arr, target) {
  function search(array, left, right, value) {
    if (left > right) {
      return -1
    }

    let mid = left + ((right - left) >> 1)

    if (array[mid] == value) {
      return mid
    } else if (array[mid] < value) {
      search(array, mid + 1, right, value)
    } else {
      search(array, left, mid - 1, value)
    }
  }

  return search(arr, 0, arr.length - 1, target)
}
```
## 容易出错的地方

- 循环退出条件

  left <= right 而不是 left < right

- mid 取值

  假如我们写成 mid = (left + right) / 2 的话，那么如果 left 和 right 都比较大的话，两者之和就有可能会发生溢出。改进一下的话则可以写成 left + (right - left) / 2 更进一步的话，采用位运算来实现除以 2 的操作 left + ((right - left) >> 1)

- left 与 right 的更新

  需要注意这里的更新，否则很容易发生死循环

## 局限性

1. 二分查找依赖于顺序表结构(数组)
  
    使用链表是不行的。因为其需要按照数组下标随机访问元素。数组是 O(1) 而链表则是 O(n)

2. 二分查找针对有序数组  

    顾名思义，如果数组没有排序则先排序

3. 数据量太小不适合二分查找
 
    假如你一个数组只有 10 个元素，不管是用什么查找，其查找速度都差不多
    
    但是如果针对比较操作比较耗时的，则可以使用二分查找减少比较的次数

4. 数据量太大也不适合

    数组这种数据结构，需要连续的内存空间去保存元素。如果无法申请到合适的内存空间，那也就比较吃力了