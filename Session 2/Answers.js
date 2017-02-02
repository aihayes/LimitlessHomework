// Q1
(function flattenArray() {
	'use strict';

	var flattenedArray;

	function flattenArray(inputArray) {
		var outputArray,
			valueType;
		outputArray = convertToString(inputArray);
		for (v in outputArray) {
			valueType = findVarType(outputArray[v]);
			outputArray[v] = revertType(outputArray[v],valueType);
		}
		return outputArray;
	}

	function convertToString(inputArray) {
		return inputArray.join().split(',');
	}
	
	function findVarType(value) {
		return (!isNaN(value)) ? 'number' : 'string' ;
	}

	function revertType(value,type) {
		return (type==='number') ? parseInt(value) : value ;
	}

	flattenedArray = flattenArray([1,2,3, [2,54,98, [43,9]], 2,3]);
})();

// Q2
function isPalindrome(inputString) {
	return (inputString === inputString.split('').reverse().join('')) ? true : false;
}

// Q3
function addWork(inputString, work) {
	var resultString;
	
	inputString = inputString.trim();
	inputString = inputString.replace(/\s+/g, ' ');
	if(!inputString.includes(work)) {
		resultString = inputString.concat(' ' + work);
	}
	return resultString;
}

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

// Q5
(function sortContent() {
	'use strict';

	var sortedArray;

	function sortArray(domName) {
		var domArray;
		domArray = findDomArray(domName);
		sorter(domArray);
        return domArray;
	}
	
	function findDomArray(domName) {
		return Array.prototype.slice.call(document.querySelectorAll(domName));
	}

	function sorter(domArray) {
		var value1,
			value2;
		domArray.sort(function(v1, v2) {
			if (!isNaN(v1.dataset.order) && !isNaN(v2.dataset.order)){
	            value1 = v1.dataset.order;
				value2 = v2.dataset.order;
			} else {
				value1 = parseInt(v1.childNodes[0].nodeValue);
				value2 = parseInt(v2.childNodes[0].nodeValue);
			}
			return (value1 > value2) ? 1 : (value1 < value2) ? -1 : 0;
		});
	}
	
	sortedArray = sortArray('.ll-homework');
})();


// Q6
//Something like an array in nature - honeycomb in a bee hive - has a repeatable pattern, 
//and while each cell isn't exactly the same, they're all of the same type of material and general shape.

