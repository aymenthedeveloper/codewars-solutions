function incrementString(str) {
  let word = str.replace(/\d+\b/g, '');
  let [num] = str.match(/\d+\b/)||['0'];
  let n = +num + 1;
  return `${word}${'0'.repeat(Math.max(num.length-String(n).length, 0))}${n}`;
}