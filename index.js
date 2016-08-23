var myFind = require('./starter-code/myFind')
var myEach = require('./starter-code/myEach');
var myMap = require('./starter-code/myMap');
var myReduce = require('./starter-code/myReduce');
var myFilter = require('./starter-code/myFilter')
/* *********************************************************************
  You can edit this file.  It is set up to have use of your code in:

  starter-code/
      myEach.js
      myMap.js
      myReduce.js

  To execute it from the command line, run: `node index.js`
***********************************************************************/
var numArray = [0,1,10,100,1000];


//index.js


/* myFind */
var input = numArray;
var output = myFind(input, function greaterThan100 (num) {
	if (num > 100) {
		return num;
	}
});
console.log('Testing myFind');
console.log('Expected:', 1000, 'Got:', output);



/* myEach */

//
myEach(numArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });


//my own myEach test driver code
var array = [];
var input = numArray;
myEach(input, function double (num) {
	var doubled = num * 2;
	array.push(doubled);	
});

console.log('Testing myEach');
console.log('Expected:', [0,2,20,200,2000], 'Got:', array);





/* myMap */

var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion


/* myFilter */
var input = [1, 2, 3, 4, 5, 6];
var output = myFilter(input, function isDivByThree(num){
	return num % 3 ===0;
});

console.log('Testing myFilter');
console.log('Expected:', [3, 6], 'Got:', output);




console.log("the end of index.js");
