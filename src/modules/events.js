'use strict';


/**
 * This Module contains functions to listen and dispatch event
 * @module Events
 */
SlimQuery.extend({

	/**
	 * Registers an event on all current elements
	 * @param  {String} name    - Event handler
	 * @param  {Function} handler - Event callback 2 args given: event-Object and Element-node
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	on: function(name, handler){
		let names = name.replace(/\s+/g, ' ').split(' ');
		this.each((item)=>{
			names.forEach((name)=>{
				name = (name === 'ready')? 'DOMContentLoaded':name;
				item.addEventListener(name, (event)=>handler(event, item));
			});
		});
		return this;
	},

	/**
	 * Triggers the given event on all current elements, where a matching listener is active
	 * @param  {String} name - Event handler
	 * @return {SlimQuery}  unaltered SlimQuery Object
	 */
	trigger: function(name){
		let names = name.replace(/\s+/g, ' ').split(' ');
		this.each((item)=>{
			names.forEach((name)=>{
				let event = document.createEvent('HTMLEvents');
				event.initEvent(name, true, false);
				item.dispatchEvent(event);
			});
		});
		return this;
	}
}, false);