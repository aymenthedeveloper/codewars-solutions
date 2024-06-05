// try solve your kata here

function firstNonRepeatingLetter(str) {
  return str.split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}

function firstNonRepeatingLetter(str) {
  return str.replace(/([a-z])(?=.*\1)/ig, '').split('').filter((v,i,arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0] || '';
}



function domainName(url){
  const pattern = /^((https?:\/\/)?(www\.)?([a-z0-9-]+)(\..+))$/i;
  return url.replace(pattern, '$4');
}


let data = "https://r7euthhsx6e1nojs2ln3-0xhkkrah.tv/users";

result = domainName(data);

console.log(result);