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