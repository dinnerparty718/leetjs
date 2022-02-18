`
Approach 1
  Time O(n)
  Space O(1)

  copy num1 to copied list
  two pointer

Approach 2 
  Time O(n)
  Space O(1)

  three pointers
  popluate backwards

`


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0
  let p2 = 0

  let num1_copy = nums1.slice(0, m)


  for (let p = 0; p < m + n; p++) {
    if (p2 >= n || (p1 < m) && num1_copy[p1] <= nums2[p2]) {
      nums1[p] = num1_copy[p1]
      p += 1
    } else {
      nums1[p] = nums2[p2]
      p2 += 1
    }
  }


  return nums1
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1



  for (let p = m + n - 1; p >= 0; p--) {
    if (p2 < 0) {
      break
    }

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1 -= 1
    } else {
      nums1[p] = nums2[p2]
      p2 -= 1
    }

  }


  return nums1
};

/**
 * @param {number[]} l1
 * @param {number[]} l2
*/
const mergeSortedList = (l1, l2) => {
  const m = l1.length
  const n = l2.length


  let i = 0; let j = 0

  const res = []

  while (i < m && j < n) {
    if (l1[i] < l2[j]) {
      res.push(l1[i])
      i += 1
    } else {
      res.push(l2[j])
      j += 1
    }
  }

  for (let k = i; k < m; k++) {
    res.push(l1[k])
  }

  for (let k = j; k < n; k++) {
    res.push(l2[k])
  }

  return res
}


const nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
const nums2 = [2, 5, 6]
const n = 3

const res = merge(nums1, m, nums2, n)


// const res = mergeSortedList([1, 2, 4], [0, 5, 32])




console.log(res)