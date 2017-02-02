/* Create an array of size 365 eg [1,2,3,4,5,6,7....365];
Randomly pick a number from the above Array;
Continue randomly picking numbers until you have a match with the first number 
[CLARIFICATION: ...until you have a match with any previously picked number].
record the number of choices it took to achieve this;
Reply with a copy of your attempt to be reviewed. */

(function matchNumbers() {
	'use strict';

	var numbersArray,
		iterationsUntilMatch;

	function createArrayOfNumbers(arraySize) {
		var outputArray,
			loopLength;

		outputArray = [];
		if(!isNaN(arraySize) && Number(arraySize) !== 0){
			for(var i = 0, loopLength = arraySize; i < loopLength; i += 1) {
				outputArray[i] = i;	
			}
			return outputArray;
		} else {
			return 'Input parameter must be a number.';
		}
	}

	function findRandomMatch(inputArray) {
		var currentChoice,
			numberOfChoices,
			listOfChoices,
			matchFound;

		numberOfChoices = 0;
		listOfChoices = [];
		matchFound = false;
		if (isArray(inputArray) && inputArray.length > 0) {
			while(!matchFound) {
				currentChoice = pickRandomElement(inputArray);
				numberOfChoices++;
				if(checkForMatchInArray(listOfChoices,currentChoice)) {
					matchFound = true;
					return numberOfChoices;
				} else {
					listOfChoices.push(currentChoice);
				}
			} 
		} else {
			return inputArray;
		}
	}

	function pickRandomElement(inputArray) {		
		if (isArray(inputArray) && inputArray.length > 0) return inputArray[Math.floor(Math.random() * inputArray.length)];
		return 'Input parameter ' + inputArray + ' must be an array of one or more elements in size.';
	}

	function checkForMatchInArray(listToBeMatched,currentValue) {		
		return (isArray(listToBeMatched) && listToBeMatched.indexOf(currentValue) > -1);
	}

	function isArray(inputValue) {		
		return (Object.prototype.toString.call(inputValue) === '[object Array]');
	}

	numbersArray = createArrayOfNumbers(365);
	iterationsUntilMatch = findRandomMatch(numbersArray);

})();