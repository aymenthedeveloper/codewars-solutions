function order(words){
  return words.split(' ').sort((a,b) => a.match(/(\d)/)[0] - b.match(/\d+/)[0]);
}

console.log(order("is2 Thi1s T4est 3a"));
console.log("is2 Thi1s T4est 3a".match(/\w*(\d)\w*/));
console.log("is2 Thi1s T4est 3a".match(/\w*(\d)\w*/)[1]);