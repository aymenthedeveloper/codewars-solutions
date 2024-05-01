// function disemvowel(str) {
//     return str.split('').filter(x => !"aeiou".includes(x.toLowerCase())).join('');
// }

function disemvowel(str) {
    return str.replace(/["aeiou"]*/ig, '');
}

function squareDigits(num){
    return Number(String(num).split('').map(x => Number(x)**2).join(''));
}

function descendingOrder(n){
    return +String(n).split('').sort((a,b) => b -a ).join('');
}


function getMiddle(s){
    return s.substr(Math.ceil(s.length/2-1), s.length % 2 === 0? 2: 1);
}

function accum(s) {
	return s.toLowerCase().split('').map((c,i) => c.toUpperCase() + c.repeat(i)).join('-');
}

function XO(str) {
  return (str.match(/x/ig) || []).length === (str.match(/o/ig) || []).length;
}

function findShort(s){
  return s.split(' ').map(a => a.length).sort((a,b) => a -b)[0];
}


function dnaStrand(dna){
  return dna.split('').map(c => {return {'T': 'A', 'A': 'T', 'C': 'G', 'G': 'C'}[c]}).join('');
}

function maskify(cc) {
  return cc.length <= 4? cc: "#".repeat(cc.length - 4) +  cc.slice(-4);
}

function getFirstLetter(str){
  return !str.match(/^[a-z]/)
}
function checkCredtCard(str){
  return /\d{4} ?\d{4} ?\d{4} ?\d{4}/.test(str)
}
function isIsogram(str){
  return /(\w).*?\1/i.test(str);
}