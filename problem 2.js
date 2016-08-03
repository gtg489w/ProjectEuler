var evenFibonacciNumbers = function(limit, sumMax) {
	var fibNumbers = [1, 2];
	for(var i=3; i<=limit; i++) {
		fibNumbers[fibNumbers.length] = fibNumbers[fibNumbers.length-1] + fibNumbers[fibNumbers.length - 2];
	}
	
	var sum = 0;
	for(var j=0; j<fibNumbers.length; j++) {
		if(fibNumbers[j] %2 == 0 && fibNumbers[j] < sumMax) {
			sum += fibNumbers[j];
		}
	}
	return sum;
};

evenFibonacciNumbers(4000000, 4000000);