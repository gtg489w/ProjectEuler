var start = new Date(1901, 0, 1, 0, 0, 0, 0);
start.setDate(start.getDate() + 7-start.getDay());

var end = new Date(2000, 11, 31, 0, 0, 0, 0);
end.setDate(end.getDate() + 1);

var count = 0;

while(start < end) {
	if(start.getDate() == 1) {
		count ++;
	}
	start.setDate(start.getDate() + 7);
}

console.log(count); // 171
