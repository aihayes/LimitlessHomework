/*
II. Create a function that will return an array of data with has a size of 200 and each element is a random string which has the size of 25 - 35.
//example: ['afasdf424234', 'adsfdf-.RE4432B'. .......]
 */

(function randomArray() {
	'use strict';

	var randomArray;

	function generateRandomStr(minStrLength,maxStrLength) {
		var outputStr,
			possibleCharacters,
			strLength,
			loopLength; 

		outputStr = "";
		possibleCharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-_";
		strLength = getRandomInt(minStrLength,maxStrLength);
		if(!isNaN(strLength)){
			for(var i = 0; loopLength = strLength, i < loopLength; i += 1) {
		        outputStr += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
			}
		} else {
			outputStr = 'Parameter ' + strLength + ' must be a number.';
		}

	    return outputStr;
	}

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function generateRandomArray(arraySize,minStrLength,maxStrLength) {
		var outputArray,
			loopLength; 

		outputArray = [];
		if(!isNaN(arraySize)){
			for(var i = 0; loopLength = arraySize, i < loopLength; i += 1) {
		        outputArray[i] = generateRandomStr(minStrLength,maxStrLength);
			}
			return outputArray;
		} else {
			return 'Input parameters must be numbers.';
		}
	}

	randomArray = generateRandomArray(200,25,35);
})();
