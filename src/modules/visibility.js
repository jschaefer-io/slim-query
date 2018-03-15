/**
 * This Module contains functions to manipulate elements visiblity
 * @module Visiblity
 */
SlimQuery.extend({

	/**
	 * Removes a display none from all current elements
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	show: function(){
		this.style('display', ' ');
		return this;
	},

	/**
	 * Adds a display none to all current elements
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	hide: function(){
		this.style('display', 'none');
		return this;
	}
}, false);
