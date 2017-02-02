//1. create a function that flatten multiple array that contains integers into one dimentional array
var arr = [1,2,3, [2,54,98, [43,9]], 2,3]; // result = [1,2,3,2,54,98,43,9,2,3];

var string = arr.join();
// "1,2,3,2,54,98,43,9,2,3"

var array = string.split(',');
// ["1","2","3","2","54","98","43","9","2","3"]

for (a in array ) {
    array[a] = parseInt(array[a]);
}
// [1,2,3,2,54,98,43,9,2,3]

//2. create a function that will check if the string is Palindrome
var testStr = 'noon';
var array = testStr.split('');
// ["n","o","o","n"]
var originalArray = array.splice();
array.reverse();
// check if originalArray === array

//3. create a function that is able to add work to a string if the work dosen't exist in the given string.
var str = 'foo bar foo   bar foo';

// add "foo"
// result: 'foo bar foo bar foo' //same because "foo" already existed

// add "hello"
// result: 'foo bar foo bar foo hello'

//4. create a function that is able to remove a word from string. It should remove all matches and the result should be in a good format
var str = 'foo bar bar foobar foo    hello    bar    foo   ';
//remove "foo". result = 'bar bar foobar hello bar'

//5. create a function that query a list of dom that have the class name "ll-homework" and sort them by their content.
// html
/*
<div class="ll-homework">3</div>
<div class="ll-homework">4</div>
<div class="ll-homework">1</div>
<div class="ll-homework">67</div>
<div class="ll-homework" data-order="1">20</div>
<div class="ll-homework" data-order="3">20</div>
<div class="ll-homework" data-order="4">20</div>
<div class="ll-homework" data-order="2">20</div>
<div class="ll-homework" data-order="5">20</div>
<div class="ll-homework">2</div>
*/

//6. think of something/idea/concept in nature that behaves like an array OR can be described by array/list/register...