function generateHashtag (str) {
  const validate = str => str.length > 140 || str.length == 1? false: str;
  const generate = str => validate('#'+(str.match(/\w+/gi)||[]).map(w => w[0].toUpperCase() + w.substr(1)).join(''));
  return generate(str);
}