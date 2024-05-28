function firstNonRepeatingLetter(str) {
  return str.toLowerCase().split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}
// the function above does everything right execpt it returns the letter in lower case in case the right answer in lower case :,)



function firstNonRepeatingLetter(str) {
  let i = 0, arr = str.toLowerCase().split('');
  while (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) ++i
  return str[i] || '';
}