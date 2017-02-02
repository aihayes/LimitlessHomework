// Q4
function removeWord(inputString, word) {
	var inputArray,
		resultString;
	inputString = inputString.replace(/\s+/g, ' ');
	inputArray = inputString.split(' ');
	for (var i = inputArray.length - 1; i >= 0; i--) {
		if (inputArray[i] === word) {
			inputArray.splice(i,1);
		}
	}
	resultString = inputArray.join(' ');
	return resultString;
}