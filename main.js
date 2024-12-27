// try solve your kata here


function score(arr) {
  const count = arr.reduce((obj,v) => {
    obj[v]? obj[v]++: obj[v] = 1;
    return obj;
  }, {});
  return Object.keys(count).reduce((s,k) => {
    let c = count[k];
    if (k == 5) s += c < 3? c * 50: 500 + c % 3 * 50;
    else if (k == 1) s += c < 3? c * 100: 1000 + c % 3 * 100;
    else if (c >= 3) s += 100 * k;
    return s;
  }, 0);
}
function score(arr) {
  const count = [0,0,0,0,0,0];
  const threePoints = [1000, 200, 300, 400, 500, 600];
  const onePoint = [100, 0, 0, 0, 50, 0];
  arr.forEach(e => count[e-1]++ );
  return count.reduce((total, n, i) => {
    return total + (count[i] >= 3? threePoints[i]: 0) + (count[i] % 3 * onePoint[i]); 
  }, 0)
}

let data = [5,1,3,4,1];
data = [1,1,1,1,3];

result = score(data);

console.log(result);