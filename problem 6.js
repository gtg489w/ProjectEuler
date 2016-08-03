var sumOfSquares = function(limit) {
	var sum = 0;
	for(var i=1; i<=limit; i++) {
		sum += Math.pow(i, 2);
	}
	return sum;
};

var squareOfSum = function(limit) {
	var sum = 0;
	for(var i=1; i<=limit; i++) {
		sum += i;
	}
	return Math.pow(sum, 2);
};

var sumSquareDifference = function(limit) {
	return squareOfSum(limit) - sumOfSquares(limit);
};

// sumSquareDifference(10);
sumSquareDifference(100); // 25164150