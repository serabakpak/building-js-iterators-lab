// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
	
	var previousVal = arr[0];
	for (var i = 1; i < arr.length; i++) {
		previousVal = callback(previousVal, arr[i], i, arr);
	}
	return previousVal;

}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
