/*
var isPrime = function(num) {
	for(var i=2; i<=Math.floor(num/2); i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return true;
};
*/

var isPrime = function(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
};

var primeIndex = function(limit) {
	var primes = [];
	var index = 2;
	while(primes.length < limit) {
		if(isPrime(index)) {
			primes[primes.length] = index;
		}
		index++;
	}
	return primes[limit-1];
};

// primeIndex(6);
primeIndex(10001); // 104743