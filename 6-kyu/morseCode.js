decodeMorse = function(morseCode){
  return morseCode.replace(/^\s*|\s*$/g, '').split('   ').map(word => word.split(" ").map(ch => MORSE_CODE[ch]).join('')).join(' ');
}