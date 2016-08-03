var getNumberOfDivisors = function(num) {
	var count = 0;
	for(var i=1; i<=num; i++) {
		if(num % i === 0) {
			count++;
		}
	}
	return count;
};

var getDivisors = function(num) {
	var divisors = [];
	for(var i=1; i<=num; i++) {
		if(num % i === 0) {
			divisors[divisors.length] = i;
		}
	}
	return divisors;
};

var getDivisorsLessThanNum = function(num) {
	var divisors = [];
	for(var i=1; i<num; i++) {
		if(num % i === 0) {
			divisors[divisors.length] = i;
		}
	}
	return divisors;
};

var arraySum = function(arr) {
	var sum = 0;
	arr.forEach(function(i) {
		sum += i;
	});
	return sum;
};

var isAbundant = function(num) {
	return arraySum(getDivisorsLessThanNum(num)) > num;
};

var findAbundantNumbers = function() {
	var abundants = [];
	for(var i=1; i<=28123; i++) {
		if(isAbundant(i)) {
			abundants.push(i);
		}
	}
	return abundants;
};

var abundants = findAbundantNumbers();

var isAbundantSum = function(num) {
	for(var i=0; i<abundants.length; i++) {
		var a1 = abundants[i];
		if(a1 > num) {
			return false;
		}
		for(var j=0; j<abundants.length; j++) {
			var a2 = abundants[j];
			if(a2 > num) {
				break;
			}
			if(a1 + a2 == num) {
				return true;
			}
		}
	}
	return false;
};

var nonAbundantSums = function() {
	var sum = 0;
	
	for(var i=1; i<=28123; i++) {
		if(!isAbundantSum(i)) {
			sum += i;
		}
	}
	return sum;
};

nonAbundantSums(); // 4179871

