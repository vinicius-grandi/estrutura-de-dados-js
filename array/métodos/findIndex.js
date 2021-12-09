const nums = [1,2,2,5,6]
console.log(nums.findIndex(a => a > 2))

const newNum = Array.from(nums, x => x % 2 == 0)
console.log(newNum)