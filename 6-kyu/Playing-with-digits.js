function digPow(n, p){
  const result = n.toString().split('').map((x, i) => x**(p+i)).reduce((a,b) => a + b);
  return result % n? -1: result / n;
}