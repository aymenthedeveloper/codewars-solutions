// try solve your kata here

/*
function scramble(str1, str2) {
  str2 = [...str2];
  return str1.replace(/[a-z]/g, c => str2.includes(c)? c: '').length === str2.length;
}

function scramble(str1, str2) {
  let length = 0;
  for (let i = 0; i < str2.length; i++) {
    let c = str2[i], index = str1.search(c);
    if (index >= 0) {
      s += c;
      str1 = str1.slice(0, index) + str1.slice(index+1)
    };
  }
  return length === str2.length;
}


function scramble(str1, str2) {
  let l = 0;
  let pattern = new RegExp(`[^${str2}]`, 'g');
  str1 = str1.replace(pattern, '');
  for (let i = 0; i < str2.length; i++) {
    let c = str2[i];
    let index = str1.search(c);
    if (index >= 0) {
      l++
      if (l === str2.length) return true;
      str1 = str1.slice(0,index).concat(str1.slice(index+1));
    } else return false;
  }
  return false
}
*/
function scramble(str1, str2) {
  if (str1.length < str2.length) return false;
  let pattern = new RegExp(`[^${str2}]`, 'g');
  str1 = str1.replace(pattern, '');
  s2 = str2.split('');
  for (let i = 0; i < str1.length; i++) {
    let c = str1[i];
    let index = s2.indexOf(c);
    if (index >= 0) s2.splice(index,1);
  }
  return s2.length === 0;
}



let data = ['rodlncufnfufw', 'world'];

result = scramble(...data);

console.log(result);