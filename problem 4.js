var reverse = function(s) {
    return s.split("").reverse().join("");
};

var isPalindrome = function(num) {
	if("" + num == reverse("" + num)) {
		return true;
	}
	return false;
};

var evenlyDivisible = function(num, digits) {
	var max = Math.pow(10, digits) - 1;
	for(var i=max; i>max/2; i--) {
		if(num / i < max && num % i == 0) {
			return true;
		}
	}
	return false;
};

var largestPalindromeProduct = function(digits) {
	var maxNumber = Math.pow(Math.pow(10, digits), 2) - 2;
	var test = maxNumber;

	while(test > 0) {
		if(isPalindrome(test)) {
			if(evenlyDivisible(test, digits)) {
				return test;
			}
		}
		test--;
	}
};

// largestPalindromeProduct(2);
largestPalindromeProduct(3); // 906609
