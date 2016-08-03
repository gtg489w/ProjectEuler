var oddSequence = function(num) {
	return (3 * num) + 1;
};

var evenSequence = function(num) {
	return num / 2;
};

var nextSequence = function(num) {
	if(num % 2 === 0) {
		return evenSequence(num);
	} else {
		return oddSequence(num);
	}
};

var collatzSequences = {};

var getCollatzSequence = function(num) {
	if(num == 1) {
		return 1;
	}
	if(collatzSequences[num]) {
		return collatzSequences[num];
	}
	var count = getCollatzSequence(nextSequence(num)) + 1;
	collatzSequences[num] = count;
	return count;
};


var longestCollatzSequence = function(maxStarting) {
	var longest = 0;
	var longestStart = 1;
	for(var i=1; i<maxStarting; i++) {
		var sequence = getCollatzSequence(i);
		if(sequence > longest) {
			longest = sequence;
			longestStart = i;
		}
	}
	console.log(longestStart + ' with a sequence of ' + longest);
};

// longestCollatzSequence(14);
longestCollatzSequence(1000000); // 837799 with a sequence of 525