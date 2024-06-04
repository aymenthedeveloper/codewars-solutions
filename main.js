// try solve your kata here

function firstNonRepeatingLetter(str) {
  return str.split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}

function firstNonRepeatingLetter(str) {
  return str.replace(/([a-z])(?=.*\1)/ig, '').split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}


function orderWeight(list) {
  const weight = w => w.split('').reduce((a,b) => a + (+b),0);
  return list.split(' ').sort((a,b) => {
    let i = weight(a), j = weight(b);
    return i===j? a.localeCompare(b): i-j;
  }).join(' ');
}


let data = "202 103 4444 99 2000";

result = orderWeight(data);

console.log(result);
console.log('23'.localeCompare('11'))