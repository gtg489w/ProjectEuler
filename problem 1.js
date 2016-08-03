var multiplesOfThreeAndFive = function(limit) {
	var sum = 0;
	var i = 1;
	while(i<limit) {
		if(i%3 == 0 || i%5 == 0) {
			sum += i;
		}
		i++;
	}
	return sum;
};

multiplesOfThreeAndFive(1000);