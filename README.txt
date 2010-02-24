MoveB jQuery Plugin v0.0.1
-------------------------------
Copyright (c) 2010 Chad Hutchins. Licensed under the MIT license.


Overview
--------

MoveB is a jQuery plugin that can move elements out of the way of a certain point on the page and lets you determine what elements contain a particular point on the page. We'll see what it turns into over time... 


Usage
-----

// select all elements that the point 250,500 (pixels from top of screen, pixels from left of screen) falls within
$(":around(250,500)")

// hide all div elements with the class "holla" that the point 300,300 falls within
$("div.holla:around(300,300)").hide();

// if the given point 250,250 is within the bounds of any div element with the class "holla", the div gets moved out of the way
$("div.holla").moveb(250,250);

// same as the previous example, except we set the padding distance to move the elements 100px from the given point
var settings = {
	padding: 100
};
$("div.holla").moveb(250,250,settings);