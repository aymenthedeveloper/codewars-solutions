// try solve your kata here




function firstNonRepeatingLetter(str) {
  return str.toLowerCase().split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}


function firstNonRepeatingLetter(str) {
  let i = 0, arr = str.toLowerCase().split('');
  while (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) ++i
  return str[i] || '';
}




let data = 'sTreSS';

result = firstNonRepeatingLetter(data);

console.log(result);