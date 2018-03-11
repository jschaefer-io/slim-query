'use strict';


/**
 * This Module contains functions to manipulate Attributes
 * @module Attributes
 */
SlimQuery.extend({

	/**
	 * Gets or sets a given attribute value
	 * @param  {String} attr  - Attribute value to get or set
	 * @param  {String} value - new Attribute value. Empty to only recieve the value
	 * @return {SlimQuery|String} Unaltered SlimQuery Object if no value was set. Then it returns the given attr value
	 */
	attr: function(attr, value = null){
		if (value === null) {
			if (this.length() > 0) {
				let atts = Array.from(this.get(0).attributes);
				for (var i = 0; i < atts.length; i++) {
					if (atts[i].name === attr) {
						return atts[i].nodeValue;
					}
				}
			}
			return null;
		}
		else{
			this.each((item)=>{
				item.setAttribute(attr, value);
			});
			return this;
		}
	},

	/**
	 * Removes the given Attribute from the DOM-Node
	 * @param  {String} attr - Attribute name to remove
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	removeAttr: function(attr){
		this.each((item)=>{
			item.removeAttribute(attr);
		});
		return this;
	}
}, false);