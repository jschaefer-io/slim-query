/**
 * This Module contains functions to move elements around the DOM
 * @module Move
 */
SlimQuery.extend({

	/**
	 * Appends the given items to the first Element in the current SlimQuery Object
	 * @param  {SlimQuery} items - SlimQuery Object to append
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	append: function(items){
		items.each((item)=>{
			this.get(0).appendChild(item);
		})
		return this;
	},

	/**
	 * Prepends the given items to the first element in the current SlimQuery Object
	 * @param  {SlimQuery} items - SlimQuery Object to prepend
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	prepend: function(items){
		let element = this.first(),
			children = element.children().first();
		
		items.each((item)=>{
			if (children.length() > 0) {
				element.get(0).insertBefore(item, children.get(0));
			}
			else{
				this.spawn(element).append(this.spawn(item));
			}
		});
		return this;	
	}	
}, false);