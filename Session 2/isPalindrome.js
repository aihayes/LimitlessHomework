// Q2
function isPalindrome(inputString) {
	return (inputString === inputString.split('').reverse().join('')) ? true : false;
}