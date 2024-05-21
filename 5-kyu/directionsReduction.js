function dirReduc(arr) {
  let str = arr.join(' '), prev = 1, curr = 0;
  while (prev !== curr){
    prev = str.length;
    str = str.replace(/north +south|south +north|east +west|west +east/ig, '');
    curr = str.length;
  }
  return str.match(/\w+/g) || [];
}