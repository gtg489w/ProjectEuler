var isPrime = function(num) {
	for(var i=2; i<Math.floor(num/2); i++) {
		if(num % i == 0) {
			return false;
		}
	}
	return true;
};

var largestPrimeFactor = function(num) {
	for(var i=Math.floor(num/2); i>1; i--) {
		if(num % i == 0 && isPrime(i)) {
			return i;
		}
	}
};

// largestPrimeFactor(13195);
largestPrimeFactor(600851475143); // 6857