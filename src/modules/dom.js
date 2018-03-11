'use strict';


/**
 * This Module contains functions to traverse the DOM
 * @module DOM
 */
SlimQuery.extend({

	/**
	 * Finds all Nodes matching the given query in the current elements subtrees
	 * @param  {String} query - CSS-Query String
	 * @return {SlimQuery} new SlimQuery instance containing the found nodes
	 */
	find: function(query){
		let list = [];
		this.each((item)=>{
			let set = this.spawn(query, item).get();
			list = list.concat(set);
		});
		list = Array.from(new Set(list));
		return this.spawn(list);
	},

	/**
	 * Gets the next Element of all current Elements
	 * @return {SlimQuery} new SlimQuery instance with the next elements
	 */
	next: function(){
		let list = [];
		this.each((item)=>{
			if (item.nextElementSibling !== null) {
				list.push(item.nextElementSibling);
			}
		});
		list = Array.from(new Set(list));
		return this.spawn(list);
	},

	
	/**
	 * Gets the previous Element of all current Elements
	 * @return {SlimQuery} new SlimQuery instance with the previous elements
	 */
	prev: function(){
		let list = [];
		this.each((item)=>{
			if (item.previousElementSibling !== null) {
				list.push(item.previousElementSibling);
			}
		});
		list = Array.from(new Set(list));
		return this.spawn(list);
	},

	/**
	 * Gets the current elements parent node
	 * @return {SlimQuery} new SlimQuery instance containing the parent nodes
	 */
	parent: function(){
		let list =  [];
		this.each((item)=>{
			if (item.parentNode !== null) {
				list.push(item.parentNode);
			}
		});
		list = Array.from(new Set(list));
		return this.spawn(list);
	},

	/**
	 * Searches the DOM-Tree upwards, to find all parents matching the given query
	 * @param  {Strgin} query - CSS-Query String
	 * @return {SlimQuery} new SlimQuery instance containing the found elements
	 */
	parents: function(query){
		let list = [],
			elements = this.spawn(query).get();
		this.each((item)=>{
			let parent = this.spawn(item).parent();
			while(parent.length() > 0){
				if (this.api.isIn(parent.get(0), elements)) {
					list.push(parent.get(0));
				}
				parent = parent.parent();
			}
		});
		list = Array.from(new Set(list));
		return this.spawn(list);
	},

	/**
	 * Gets all of the elements children
	 * @param  {Boolean|String} query - If set, the children need to match the given query
	 * @return {SlimQuery} new SlimQuery instance containing all found children
	 */
	children: function(query = false){
		let list = [],
			elements;
		if (query) {
			elements = this.spawn(query).get();
		}
		this.each((item)=>{
			let childs = Array.from(item.children);
			childs.forEach((child)=>{
				if (query) {
					if (this.api.isIn(child, elements)) {
						list.push(child);
					}
				}
				else{
					list.push(child);
				}
			});
		});
		list = Array.from(new Set(list));
		return this.spawn(list);
	},

	/**
	 * Gets all of the elements siblings
	 * @param  {Boolean|String} query - If set, the siblings need to match the given query
	 * @return {SlimQuery} new SlimQuery instance containing all found siblings
	 */
	siblings: function(query = false){
		let list = [];
		this.each((item)=>{
			let parent = this.spawn(item).parent();
			if (parent.length() > 0) {
				let siblings = parent.children(query);
				siblings.each((sibling)=>{
					if (!item.isSameNode(sibling)) {
						list.push(sibling);
					}
				});
			}
		});
		list = Array.from(new Set(list));
		return this.spawn(list);
	}

}, false);