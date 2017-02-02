/*
I. Create a function that will randomly generate a string with a length between 15 - 25 inclusive. Note that only number, charactor, '.', '-', '_' are allowed.
//example: 'kjer_a.d12_-erET'
 */
(function randomString() {
	'use strict';

	var randomString;

	function generateRandomStr(minStrLength,maxStrLength) {
		var outputStr,
			possibleCharacters,
			strLength,
			loopLength; 

		outputStr = "";
		possibleCharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-_";
		if(!isNaN(minStrLength) && !isNaN(maxStrLength)) {
			strLength = getRandomInt(minStrLength,maxStrLength);
			for(var i = 0; loopLength = strLength, i < loopLength; i += 1) {
		        outputStr += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
			}
		} else {
			outputStr = 'Parameters ' + minStrLength + ' and ' + maxStrLength + ' must be numbers.';
		}

	    return outputStr;
	}

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	randomString = generateRandomStr(15,25);

})();