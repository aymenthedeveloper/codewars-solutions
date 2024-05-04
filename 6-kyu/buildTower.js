function towerBuilder(nFloors) {
  let tree = []
  for (let i = 1; i <= nFloors; i++) {
    tree.push(' '.repeat(nFloors - i) + '*'.repeat(i * 2 -1) + ' '.repeat(nFloors - i))
  }
  return tree
}