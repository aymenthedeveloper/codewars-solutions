// try solve your kata here

function firstNonRepeatingLetter(str) {
  return str.split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}

function firstNonRepeatingLetter(str) {
  return str.replace(/([a-z])(?=.*\1)/ig, '').split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}


let data = 'stress';

result = firstNonRepeatingLetter(data);

console.log(result);