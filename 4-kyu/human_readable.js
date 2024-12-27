function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  const output = [];
  const time = {
    year: seconds/(365*24*3600),
    day: (seconds/(24*3600))%365,
    hour: (seconds/3600)%24,
    minute: (seconds/60)%60,
    second: seconds%60,
  }
  for (const key in time) {
    t = Math.floor(time[key]);
    t > 0 && output.push(t > 1? `${t} ${key}s`: `${t} ${key}`)
  }
  if (output.length > 1){
    const last = output.pop();
    return output.join(', ') + ` and ${last}`
  } else return output[0]
}

console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))
