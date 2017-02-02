/*
IV. Create a function that will take a array with size of 300 as input and return 300 dom elements 
each of which has the string as its content and then append them into the "body" so that you can see them on your screen. 
Style your list with css (you need to do the research youself on this part) to look like the design i attached in this session. 
Note that each string inside has to be a random string which has the size of 65 - 80.
// to create a dom element
var ele = document.createElement('div');

// to add content to an element
var str = 'Limitless Rocks';
ele.innerHTML = str; OR ele.innerText = str;

// to append one element to body
document.body.appendChild(ele);

// result:
<div>blah blah</div>
<div>blah blah</div>
<div>blah blah</div>
<div>blah blah</div>
...
...
<div>blah blah</div>
 */

(function createDOMElementsFromArray() {
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

	function createDOMs(inputArray) {
		var loopLength,
			elementDOM;

		if(Object.prototype.toString.call(inputArray) == '[object Array]'){
			for(var i = 0; loopLength = inputArray.length, i < loopLength; i += 1) {
				elementDOM = document.createElement('div');
				elementDOM = addContentToDOM(inputArray[i],elementDOM);
				document.body.appendChild(elementDOM);
			}
		} else {
			alert('Input parameter must be an array.');
		}
	}

	function addContentToDOM(inputString,elementDOM) {
		elementDOM.innerText = inputString;
		elementDOM = addCloseIconToDOM(elementDOM);
		return elementDOM;
	}

	function addCloseIconToDOM(elementDOM) {
		var createA;

		createA = document.createElement('img');
		createA.setAttribute('id','icon');
		createA.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/1024px-White_X_in_red_background.svg.png");
		elementDOM.appendChild(createA);
		return elementDOM;
	}

	randomArray = generateRandomArray(300,65,80);
	createDOMs(randomArray);
})();