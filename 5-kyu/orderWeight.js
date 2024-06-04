function orderWeight(list) {
  const weight = w => w.split('').reduce((a,b) => a + (+b),0);
  return list.split(' ').sort((a,b) => {
    let i = weight(a), j = weight(b);
    return i===j? a.localeCompare(b): i-j;
  }).join(' ');
}