// Q3
function addWord(inputString, word) {
	var resultString;
	
	inputString = inputString.trim();
	inputString = inputString.replace(/\s+/g, ' ');
	if(!inputString.includes(work)) {
		resultString = inputString.concat(' ' + word);
	}
	return resultString;
}