var findSquares = function(ab, c) {
	for(var a=1; a<=ab/2; a++) {
		if(Math.pow(a, 2) + Math.pow(ab-a, 2) == Math.pow(c, 2)) {
			return a;
		}
	}
};

var specialPythagoreanTriplet = function(limit) {
	for(var c=1; c<=limit; c++) {
		var a = findSquares(limit-c, c);
		if(a) {
			return 'a: ' + a + ' b: ' + (limit-a-c) + ' c: ' + c;
		}
	}
};

specialPythagoreanTriplet(1000); // a*b*c 31875000