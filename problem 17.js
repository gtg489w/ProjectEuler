var a = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

var getNumberLetterCount = function(num) {
	var count = 0;
	var str = '';

	// pad it
	num = ('000' + num).substr(-4);

	var ones = parseInt(num[3], 10);
	var tens = parseInt(num[2], 10);
	var teens = parseInt(num.substr(-2), 10);
	var hundreds = parseInt(num[1], 10);
	var thousands = parseInt(num[0], 10);

	if(num[2] == '0') {
		str += a[ones];
	} else if(num[2] == '1') {
		str += a[teens];
	} else {
		str += a[ones];
		str += b[tens];
	}

	if(hundreds > 0) {
		str += a[hundreds] + 'hundred';
		if(ones > 0 || tens > 0) {
			str += 'and';
		}
	}

	if(thousands > 0) {
		str += a[thousands] + 'thousand';
	}
	
	// console.log(str);
	return str.length;
};

var numberLetterCounts = function(start, stop) {
	var sum = 0;
	for(var i=start; i<=stop; i++) {
		sum += getNumberLetterCount(i);
	}
	return sum;
};

// numberLetterCounts(1, 5);
numberLetterCounts(1, 1000); // 21124