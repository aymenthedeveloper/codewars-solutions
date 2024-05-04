function findMissingLetter(array){
  return Array.from(Array(array.length+1)).map((e, i) => i + array[0].charCodeAt()).map(x => String.fromCharCode(x)).filter(x => !array.includes(x))[0];
}

console.log(findMissingLetter(['a', 'b', 'd']));