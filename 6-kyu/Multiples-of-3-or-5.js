function solution(number){
  if (number <= 0){return 0};
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) {sum += i}
  }
  return sum
}
