/*
III. Create a function that will filter out any element which contains number.
// orginal ['ssfdds', 'adfd33dsf', '2ysdjlj', 'bb'];
// result ['ssfdds', 'bb'];
 */
(function filterArrayByNumbers() {
	'use strict';

	var filteredArray;

	function filterArray(inputArray) {
	    var outputArray,
	    	loopLength;

	    outputArray = [];
	    if(Object.prototype.toString.call(inputArray) == '[object Array]'){
		    for(var i = 0; loopLength = inputArray.length, i < loopLength; i += 1){
		    	if(!hasNumber(inputArray[i])) {
		    		outputArray.push(inputArray[i]);
		    	} 
		    }
		    return outputArray;
		} else {
			return 'Input parameter must be an array.';
		}
	}

	function hasNumber(myString) {
		return /\d/.test(myString);
	}

	filteredArray = filterArray(['ssfdds', 'adfd33dsf', '2ysdjlj', 'bb']);

})();
