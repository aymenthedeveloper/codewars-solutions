function toCamelCase(str){
  return str.split(/[-_]/g).map((x, i) => i? x.charAt(0).toUpperCase() + x.slice(1): x).join('');
}


console.log(toCamelCase("hello-world-world"));