var getNextFib = function(a, b) {
	return a + b;
};


var index = 2;
var a = 1;
var b = 1;
var numDigits = 1000;

while((b+'').length < numDigits) {
	var x = b;
	b = getNextFib(a, b);
	a = x;
	index++;
}

console.log(index);



// option 2 - running into Infinity issues

var fibNumberDigits = function(a, b, max) {
	if(a + b >= max) {
		return 3; // would be 1 but we need to take care of the original 1 1
	}
	return 1 + fibNumberDigits(b, a+b, max);
};

// fibNumberDigits(1, 1, 100); // 12
fibNumberDigits(1, 1, Math.pow(10, 1000)); // 1477