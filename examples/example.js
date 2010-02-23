/**
This file has some functions that are used to created elements to test with
**/

// helper function to set some bounds and create several shapes to test with
function generate_random_rectangles(shapes) {
	var min_top = 50;
	var max_top = 500;
	var min_left = 50;
	var max_left = 500;
	var min_width = 100;
	var max_width = 500;
	var min_height = 100;
	var max_height = 500;
	for (var $i=0;$i<shapes;$i++) {
		var top = generate_random_integer(min_top,max_top);
		var left = generate_random_integer(min_left,max_left);
		var width = generate_random_integer(min_width,max_width);
		var height = generate_random_integer(min_height,max_height);
		create_rectangle(top,left,width,height);
	}
}

// helper function to get a random integer between a min and max
function generate_random_integer(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// helper function that creates and appends a new div with given parameters
function create_rectangle(top,left,width,height) {
	$("<div class='box'></div>").css({
		position: "absolute",
		top: top,
		left: left,
		width: width,
		height: height,
		border: "1px solid #000"
	}).appendTo("body");
}

function show_marker(top,left) {
	$("<div class='marker'></div>'").css({
		position: "absolute",
		top:(top-2),
		left:(left-2),
		width:4,
		height:4,
		border:"1px solid #FF3333",
		background:"#FFDDDD",
		opacity:".5"
	}).appendTo("body");
}