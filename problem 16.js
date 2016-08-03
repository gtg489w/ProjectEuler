var powerDigitSum = function(base, power) {
	var num = Math.pow(base, power);
	var sum = 0;

	while(num > 0) {
		sum += num % 10;
		// console.log('adding ' + (num % 10));
		num = Math.floor(num / 10);
	}
	return sum;
};

powerDigitSum(2, 15);
// powerDigitSum(2, 1000);

