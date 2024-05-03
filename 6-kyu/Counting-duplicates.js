function duplicateCount(text){
  return text.length? text.toLowerCase().split('').sort().join('').match(/(\w)\1*/g).map(x => x.length).filter(x => x >= 2).length: 0;
}