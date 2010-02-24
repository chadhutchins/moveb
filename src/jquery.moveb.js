/*
 * MoveB jQuery Plugin v0.0.1
 *
 * Copyright (c) 2010 Chad Hutchins
 * Licensed under the MIT license.
 *
 */

(function($) {

	$.fn.moveb = function(left,top,settings) {
		settings = jQuery.extend({
			padding: 10
		}, settings);
		return this.each(function(){
			var $obj = $(this);
			var obj_pos = $obj.position();
			var obj_width = $obj.width();
			var obj_height = $obj.height();
			if (is_point_inside_rectangle(left,top,obj_pos.left,obj_pos.top,obj_width,obj_height)) {
				var quadrant = get_rectangle_quadrant(left,top,obj_pos.left,obj_pos.top,obj_width,obj_height);
				if (quadrant==1) {
					$obj.css({
						left: left + settings.padding,
						top: top + settings.padding
					});
				} else if (quadrant==2) {
					$obj.css({
						left: obj_pos.left - (obj_pos.left + obj_width - left) - settings.padding,
						top: top + settings.padding
					});
				} else if (quadrant==3) {
					$obj.css({
						left: left + settings.padding,
						top: obj_pos.top - (obj_pos.top + obj_height - top) - settings.padding
					});
				} else if (quadrant==4) {
					$obj.css({
						left: obj_pos.left - (obj_pos.left + obj_width - left) - settings.padding,
						top: obj_pos.top - (obj_pos.top + obj_height - top) - settings.padding
					});
				}
			}
		})
	}

	$.expr[':'].around = function(obj,index,meta,stack) {
		var $obj = $(obj);
		var obj_pos = $obj.position();
		var obj_width = $obj.width();
		var obj_height = $obj.height();
	
		// get params
		var values = meta[3].split(",");
	
		var click_left = parseInt(values[1]);
		var click_top = parseInt(values[0]);	

		return is_point_inside_rectangle(click_left,click_top,obj_pos.left,obj_pos.top,obj_width,obj_height);
	}
	
	function is_point_inside_rectangle(point_left,point_top,obj_left,obj_top,obj_width,obj_height) {
		return (
			point_left >= obj_left &&
			point_left <= (obj_left + obj_width) &&
			point_top >= obj_top &&
			point_top <= (obj_top + obj_height)
		);
	}
	
	function get_rectangle_quadrant(point_left,point_top,obj_left,obj_top,obj_width,obj_height) {
		var half_width = obj_width / 2;
		var half_height = obj_height / 2;
		var mid_left = obj_left + half_width;
		var mid_top = obj_top + half_height;
		if (point_left<=mid_left && point_top<=mid_top) {
			return 1;
		} else if (point_left>mid_left && point_top<=mid_top) {
			return 2;
		} else if (point_left<=mid_left && point_top>mid_top) {
			return 3;
		} else if (point_left>mid_left && point_top>mid_top) {
			return 4;
		}
	}

})(jQuery);