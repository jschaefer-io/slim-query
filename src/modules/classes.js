/**
 * This Module contains functions to manipulate Classes
 * @module Classes
 */
SlimQuery.extend({

	/**
	 * Checks if the first Element in the current SlimQuery Object has the given class
	 * @param  {String}  className - Class to look for
	 * @return {Boolean} true if Node contains the given class
	 */
	hasClass: function(className = ''){
		let classes = className.replace(/\s+/g,' ').split(' '),
			result = {};
		classes.forEach((className)=>{
			result[className] = false;
		})
		if (this.length() > 0) {
			let item = this.get(0);
			if (item.classList !== undefined) {
				let values = Array.from(item.classList);
				for (var i = 0; i < classes.length; i++) {
					if (values.indexOf(classes[i]) === -1) {
						return false;
					}
				}
			}
		}
		return true;
	},

	/**
	 * Adds one or more classes to all Elements in the current SlimQuery Object
	 * @param {String} className - classes separated with space to add to each element
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	addClass: function(className){
		let classes = className.replace(/\s+/g,' ').split(' ');
		this.each((item)=>{
			classes.forEach((className)=>{
				if (!this.spawn(item).hasClass(className)) {
					item.className += ' ' + className;
					item.className = item.className.replace(/\s+/g, ' ').trim();
				}
			});
		});
		return this;
	},

	/**
	 * Removes one or more classes from all elements in the current SlimQuery Object
	 * @param  {String} className - classes separated with space to remove from each element
	 * @return {SlimQuery} unaltered SlimQuery Object
	 */
	removeClass: function(className){
		let classes = className.replace(/\s+/g,' ').split(' ');
		this.each((item)=>{
			let classList = item.className.replace(/\s+/g, ' ').split(' ');
			classList = classList.filter((className)=>{
				for (var i = 0; i < classes.length; i++) {
					if (className === classes[i]) {
						return false;
					}
				}
				return true;
			});
			item.className = classList.join(' ');
		});
		return this;
	},

	/**
	 * Toggles the given classes on all elements
	 * @param  {String} className - classes separated with space to toggle on each element
	 * @return {SlimQuery}  unaltered SlimQuery Object
	 */
	toggleClass: function(className){
		let classes = className.replace(/\s+/g, ' ').split(' ');
		this.each((item)=>{
			item = this.spawn(item);
			classes.forEach((className)=>{
				if (item.hasClass(className)) {
					item.removeClass(className);
				}
				else{
					item.addClass(className);
				}
			});
		});
		return this;
	}
}, false);