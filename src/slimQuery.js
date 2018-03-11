'use strict';


/**
 * SlimQuery base Class
 * All methods and APIs get registred onto this class and are available through static OR the instanced functions
 */
class SlimQuery{

	/**
	 * Generates a new SlimQuery Object
	 * @param  {Array|String} query - Accepts an array of nodes and a CSS-Query String
	 * @param  {Element} base  - DOM-Node Object, from where the query will be executed
	 */
	constructor(query, base = document){
		let type = typeof query;
		if (type === 'string') {
			this.data = Array.from(base.querySelectorAll(query));
		}
		else if (type === 'object') {
			if( Array.isArray(query) ){
				this.data = query;
			}
			else{
				this.data = [query];
			}
		}
		this.api = this.constructor;
	}

	/**
	 * Extends the SlimQuery with static OR instanced functions
	 * @access static
	 * @param  {Object}  obj          - Object containing the member functions
	 * @param  {Boolean} staticExtend - True if the functions should be registered to the static api of SlimQuery
	 */
	static extend(obj, staticExtend = false){
		for(let prop in obj){
			if (!(prop in this)) {
				if (staticExtend) {
					this[prop] = obj[prop];
				}
				else{
					this.prototype[prop] = obj[prop];
				}
			}
		}
	}

	/**
	 * Checks if the given Node is contained in the given Array of Nodes
	 * @access static
	 * @param  {Element}  item - Node to look for
	 * @param  {Array}  set  - List of Nodes
	 * @return {Boolean} true if the Node is contained in the set
	 */
	static isIn(item, set){
		for (let i = 0; i < set.length; i++) {
			if (item.isSameNode(set[i])) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Spawns a new SlimQuery instance from the given items
	 * @param  {Array|String} items - List of nodes or CSS-Query String
	 * @param  {Element} base  - DOM-Node Object
	 * @return {SlimQuery} new SlimQuery instance containing only the given items
	 */
	spawn(items, base = document){
		return new (this.constructor)(items, base);
	}
	
	/**
	 * Returns the number of items in the current SlimQuery Object
	 * @return {int} - Current number of Items
	 */
	length(){
		return this.data.length;
	}

	/**
	 * Checks if the first element in the current SlimQuery Object matches the given CSS-Query String or Node List
	 * @param  {Array|String}  query - List of nodes or CSS-Query String
	 * @return {Boolean} true if the first element matches query
	 */
	is(query){
		var query = this.spawn(query);
		if (this.length() > 0) {
			if (this.api.isIn(this.get(0), query.get())) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Gets all or the nth element in the current SlimQuery Object
	 * @param  {Boolean|int} index - Index to recieve from the data array.
	 * @return {Element|Array}  Returns the nth element if index was set and the full data array if not
	 */
	get(index = false){
		if (index !== false) {
			return this.data[index];
		}
		return this.data;
	}

	/**
	 * Gets the first element in the SlimQuery Object as a new spawn
	 * @return {SlimQuery}
	 */
	first(){
		return this.spawn(this.get(0));
	}

	/**
	 * Gets the last element in the SlimQuery Object as a new spawn
	 * @return {SlimQuery}
	 */
	last(){
		return this.spawn(this.get(this.length - 1));
	}

	/**
	 * Clones the current Nodes and returns a new SlimQuery Instance with them
	 * @return {SlimQuery} new SlimQuery Instance containing the cloned nodes
	 */
	clone(){
		let list = [];
		this.each((item)=>{
			list.push(item.cloneNode(true));
		});
		return this.spawn(list);
	}

	/**
	 * Iterates every Node in the SlimQuery Object
	 * @param  {Function} handler - function to call on each item
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	each(handler = ()=>{}){
		this.data.forEach((item)=>{
			handler(item);
		});
		return this;
	}	
}


/**
 * Main Function call to use most of the time
 * @name sq
 * @global
 * @function
 * @param  {Array|String} query - Accepts an array of nodes and a CSS-Query String
 * @param  {Element} base  - DOM-Node Object, from where the query will be executed
 * @return {SlimQuery} SlimQuery instance with the given data
 */
window.sq = (query, base = document)=>{
	return new SlimQuery(query, base);
}