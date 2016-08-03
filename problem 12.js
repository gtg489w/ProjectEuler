var getNumberOfDivisors = function(num) {
	var count = 0;
	for(var i=1; i<=num; i++) {
		if(num % i === 0) {
			count++;
		}
	}
	return count;
};

var highlyDivisibleTriangularNumber = function(divisors) {
	var triangleNumber = 1;
	var index = 2;
	var maxDivisors = 1;

	while(maxDivisors < divisors) {
		triangleNumber += index;
		index++;
		maxDivisors = getNumberOfDivisors(triangleNumber);
	}
	return triangleNumber;
};

// highlyDivisibleTriangularNumber(5); // 28
highlyDivisibleTriangularNumber(500); // 76576500