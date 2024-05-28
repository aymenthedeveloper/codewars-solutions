function maxSequence(arr) {
  let currentSum = 0, maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(currentSum+arr[i], 0);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum
}