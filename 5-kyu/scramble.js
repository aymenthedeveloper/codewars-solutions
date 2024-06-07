function scramble(str1, str2) {
  let count = 0;
  const countChars = (counter, c) => {counter[c]? counter[c]++: counter[c] = 1; return counter};
  let [validCharsCount, targetCharsCount] = [str1, str2].map(s => s.split('').reduce(countChars, {}));
  for (const key in validCharsCount) if (validCharsCount[key] >= targetCharsCount[key]) count += targetCharsCount[key];
  return count === str2.length;
}