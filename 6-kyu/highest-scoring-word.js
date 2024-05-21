function high(x){
  return x.split('').map(y => y.map(ch => ch.charCodeAt()))
}
console.log(high('man i need a taxi'))