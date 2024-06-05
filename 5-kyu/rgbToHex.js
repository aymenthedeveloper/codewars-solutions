function rgb(r, g, b) {
  return [r, g, b].map(v => {
      v = (v<0? 0: v>255? 255: v).toString(16)
      return v.length===1? 0+v: v;
    }).join('').toUpperCase();
}