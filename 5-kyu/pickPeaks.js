function pickPeaks(arr) {
  let peak, pos = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] < arr[i]) peak = i;
    else if (arr[peak] > arr[i]) {
      pos.push(peak);
      peak = null;
    }
  }
  return {pos: pos, peaks: pos.map(i => arr[i])};
};