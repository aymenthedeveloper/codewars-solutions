var uniqueInOrder=function(iterable){
  return [...iterable].join('').replace(/(\w)\1*/g, '$1').split('').map(x => isNaN(x)? x: Number(x));
}