// try solve your kata here

function rgb(r, g, b) {
  return [r, g, b].map(v => {
      v = (v<0? 0: v>255? 255: v).toString(16)
      return v.length===1? 0+v: v;
    }).join('').toUpperCase();
}

let data = [0, 0, 0];
data = [0,0,-20];
data = [0,0,300]
data = [173,255,47]
result = rgb(...data);

console.log(result);