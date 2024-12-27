const arr =[[1,2,3],
            [4,5,6],
            [7,8,9]]

function snail(array) {
  const output = [];
  while (array.length) {
    const row = array.shift();
    output.push(...row);
    if (array.length == 0) break;
    const m = array[0].length - 1;
    array = array[0].map((_, j)=>{
      return array.map((row, i) => {     
         return row[m-j]
      });
    })
  }
  return output;
}


function snailTwo(matrix){
  const output = [];
  while (matrix.length){
    output.push(...matrix.shift());
    if (matrix.length == 0) break;
    for (let i = 0; i < matrix.length; i++) {
      output.push(matrix[i].pop())
    }
    output.push(...matrix.pop().reverse())
    for (let i = matrix.length - 1; i >= 0; i--) {
      output.push(matrix[i].shift())
    }
  }
  return output;
}


console.log(snailTwo(arr));
