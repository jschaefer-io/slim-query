'use strict';


/**
 * This Module contains functions to manipulate styles
 * @module Styles
 */
SlimQuery.extend({

	/**
	 * Gets or sets a style individually
	 * @param  {String}  key - style name
	 * @param  {Boolean|String} set - new style value if not false
	 * @return {SlimQuery|String} unaltered SlimQuery Object or Style Value String
	 */
	style: function(key, set = false){
		if (set) {
			this.each((item)=>{
				if (item.style[key] !== undefined) {
					item.style[key] = set.trim();	
				}
			});
			return this;
		}
		else{
			return this.get(0).style[key];
		}
	},

	/**
	 * Sets multiple CSS-Values at once using one Object
	 * @param  {Object} obj - Object containing the style name as a key and the value as the keys value
	 * @return {SlimQuery}  unaltered SlimQuery Object
	 */
	css: function(obj = {}){
		for(let key in obj){
			this.style(key, obj[key]);
		}
		return this;
	}
}, false);