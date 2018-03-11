'use strict';


/**
 * This Module contains functions to manipulate Dimensions
 * @module Dimensions
 */
SlimQuery.extend({

	/**
	 * Gets the first Elements scrollTop value
	 * @return {Number}
	 */
	scrollTop: function(){
		return this.get(0).scrollTop;
	},

	/**
	 * Gets the first Elements scrollLeft value
	 * @return {Number}
	 */
	scrollLeft: function(){
		return this.get(0).scrollLeft;
	},

	/**
	 * Gets the First Elements offset Object
	 * @return {Object} object with .top and .left value
	 */
	offset: function(){
		let rect = this.get(0).getBoundingClientRect(),
			body = this.spawn('body');
		return {
			top: rect.top + body.scrollTop(),
			left: rect.left + body.scrollLeft()
		};
	},

	/**
	 * Gets the first elements width or sets it, if a value is given
	 * @param  {String} val - CSS value
	 * @return {String|SlimQuery} Current value or the unaltered SlimQuery Object if the value was updated
	 */
	width: function(val = null){
		if (val === null) {
			return this.get(0).clientWidth;
		}
		else{
			this.style('width', val);
			return this;
		}
	},

	/**
	 * Gets the first elements height or sets it, if a value is given
	 * @param  {String} val - CSS value
	 * @return {String|SlimQuery} Current value or the unaltered SlimQuery Object if the value was updated
	 */
	height: function(val = null){
		if (val === null) {
			return this.get(0).clientHeight;
		}
		else{
			this.style('height', val);
			return this;
		}
	},

	/**
	 * Gets the first elements outerWidth
	 * @return {Number}
	 */
	'outerWidth': function(){
		return this.get(0).offsetWidth;
	},

	/**
	 * Gets the first elements outerHeight
	 * @return {Number}
	 */
	'outerHeight': function(){
		return this.get(0).offsetHeight;
	}

}, false);