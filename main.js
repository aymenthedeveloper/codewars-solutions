// try solve your kata here


function isPalindrom(word) {
  return word === word.split('').reduce((word, curr) => curr + word, '')
}

data = 'aba';

result = isPalindrom(data);


console.log(result);
