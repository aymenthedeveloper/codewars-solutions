function duplicateEncode (text){
	const count = text.toLowerCase().split('').reduce((chars, ch)=>{
		!chars[ch]? chars[ch] = 1: chars[ch] += 1;
		return chars
	}, [])
	return text.toLowerCase().split('').map(x => count[x] === 1? "(": ")").join('');
}