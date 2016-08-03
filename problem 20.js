var sumDigits = function(num) {
	if(num < 1) {
		return 0;
	}
	return (num % 10) + sumDigits(Math.floor(num / 10));
};

var factorial = function(num) {
	if(num == 1) {
		return 1;
	}
	return num * factorial(num - 1);
};

var factorialDigitSum = function(num) {
	var f = factorial(num);
	return sumDigits(f);
};

// factorialDigitSum(10);
factorialDigitSum(100);