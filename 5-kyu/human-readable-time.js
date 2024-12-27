function humanReadable (seconds) {
  return [seconds/3600, seconds/60%60, seconds%60].map(t => String(Math.floor(t)).padStart(2,'0')).join(':');