/**
 * This Module contains functions to manage DOM-Nodes
 * @module Node
 */
SlimQuery.extend({

	/**
	 * Generates DOM-Nodes from the given String
	 * @access static
	 * @memberof module:Node
	 * @param  {String} html - String to create Elements from
	 * @return {SlimQuery} new SlimQuery Object containing the created Elements
	 */
	generate: function(html){
		let template = document.createElement('template');
		template.innerHTML = html.trim();
		return new this(Array.from(template.content.childNodes));
	},

	/**
	 * Merges two or more SlimQuery Objects into a new one
	 * @access static
	 * @memberof module:Node
	 * @param  {...SlimQuery} objs - two or more SlimQuery Object to merge
	 * @return {SlimQuery} new SlimQuery Object containing all Elements
	 */
	merge: function(...objs){
		let set = [];
		objs.forEach((obj)=>{
			set = set.concat(obj.get());
		});
		return new this(Array.from(new Set(set)));
	}
}, true);

SlimQuery.extend({

	/**
	 * Removes all elements of the current SlimQuery Object from the DOM
	 */
	remove: function(){
		this.each((item)=>{
			this.spawn(item).parent().get(0).removeChild(item);
		});
	},

	/**
	 * Clones the current Nodes and returns a new SlimQuery Instance with them
	 * @return {SlimQuery} new SlimQuery Instance containing the cloned nodes
	 */
	clone: function(){
		let list = [];
		this.each((item)=>{
			list.push(item.cloneNode(true));
		});
		return this.spawn(list);
	},
}, false);