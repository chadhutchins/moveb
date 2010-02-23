MoveB jQuery Plugin v0.0.1
-------------------------------
Copyright (c) 2010 Chad Hutchins. Licensed under the MIT license.


Overview
--------

Currently, MoveB is a jQuery plugin that lets you determine what elements contain a particular point on the page. We'll see what it turns into over time... 


Usage
-----

// select all elements that the point 250,500 (pixels from top of screen, pixels from left of screen) falls within
$(":around(250,500)")

// hide all div elements with the class "holla" that the point 300,300 falls within
$("div.holla:around(300,300)").hide();