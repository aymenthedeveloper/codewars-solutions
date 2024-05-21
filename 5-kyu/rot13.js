function rot13(str) {
  const getRot13 = (c, limit) => String.fromCharCode(c + 13 > limit? c - 13: c + 13);
  return str.replace(/[a-z]/ig, c => {
    return /[A-Z]/.test(c)? getRot13(c.charCodeAt(), 90): getRot13(c.charCodeAt(), 122);
  });
}