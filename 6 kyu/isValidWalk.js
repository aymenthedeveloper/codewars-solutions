function isValidWalk(walk) {
  const count = value => walk.filter(c => value === c).length;
  return walk.length === 10 && count('n') === count('s') && count('e') === count('w');
}