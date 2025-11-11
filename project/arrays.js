const array = [1, 2, 3, 4, 5, 5, 9];

// Two Sum
var twoSum = function (nums, target) {
  let map = new Map();

  for (var i = 0; i < nums.length; i++) {
    let comp = target - nums[i];

    if (map.has(comp)) {
      return [map.get(comp), i];
    }

    map.set(nums[i], i);
  }
};

// Remove Duplicate
const val = twoSum(array, 9);
console.log(val);

var removeDuplicates = function (nums) {
  let j = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[j + 1] = nums[i];
      j++;
    }
  }
  return j + 1;
};

const rd = removeDuplicates(array);
console.log(rd);

var maxProfit = function (prices) {
  const n = prices.length;
  let maxProfit = 0;
  let LastMax = prices[n - 1];

  for (var i = n - 2; i >= 0; i--) {
    LastMax = Math.max(LastMax, prices[i]);
    let profit = LastMax - prices[i];
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};

const mp = maxProfit(array);
console.log(mp);
