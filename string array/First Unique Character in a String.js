/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  h = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (!(char in h)) {
      h[char] = 1
    } else {
      h[char] = h[char] + 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (h[s[i]] === 1) {
      return i
    }
  }

  return -1

};


const s = "leetcode"


const res = firstUniqChar(s)

console.log(res)



