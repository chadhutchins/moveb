/*
 * MoveB jQuery Plugin v0.0.1
 *
 * Copyright (c) 2010 Chad Hutchins
 * Licensed under the MIT license.
 *
 */

(function($) {

	$.expr[':'].around = function(obj,index,meta,stack) {
		var $obj = $(obj);
		var obj_pos = $obj.position();
		var obj_width = $obj.width();
		var obj_height = $obj.height();
	
		var obj_min_left = obj_pos.left;
		var obj_max_left = obj_min_left + obj_width;
		var obj_min_top = obj_pos.top;
		var obj_max_top = obj_min_top + obj_height;

		// get params
		var values = meta[3].split(",");
	
		var click_left = parseInt(values[1]);
		var click_top = parseInt(values[0]);	

		return (
			click_left >= obj_min_left &&
			click_left <= obj_max_left &&
			click_top >= obj_min_top &&
			click_top <= obj_max_top
		);
	}

})(jQuery);