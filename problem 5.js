var isDivisibleByAll = function(num, limit) {
	for(var i=2; i<=limit; i++) {
		if(num % i != 0) {
			return false;
		}
	}
	return true;
}

var smallestMultiple = function(limit) {
	maxNumber = 1;
	for(var i=1; i<=limit; i++) {
		maxNumber = maxNumber * i;
	}
	for(var i=1; i<=maxNumber; i++) {
		if(isDivisibleByAll(i, limit)) {
			return i;
		}
	}
};

//smallestMultiple(10);
smallestMultiple(20); // 232792560