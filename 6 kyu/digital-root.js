function digitalRoot(n) {
  if (n < 10) {return n}
  return digitalRoot(n.toString().split('').map(Number).reduce((a,b)=> a + b))
}