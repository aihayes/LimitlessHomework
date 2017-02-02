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