function sortArray(array) {
  const sortedOdd = array.slice().filter(x => x % 2 !== 0).sort((a,b) => a - b);
  return array.map(x => x % 2 !== 0? sortedOdd.shift(): x)
}