var isPrime = function(num) {
	for(var i=2; i<=Math.floor(num/2); i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return true;
};

var summationOfPrimes = function(limit) {
	var sum = 0;
	for(var i=2; i<limit; i++) {
		if(isPrime(i)) {
			sum += i;
		}
	}
	return sum;
};

// summationOfPrimes(10);
summationOfPrimes(2000000); // 142913828922