
/**
 * slimQuery.js
 * ---------------
 */
(function(){

	function slimQuery(query, extend){

		// Global Helper
		//
		if (extend) {
			this.extend = function(obj){
				for( var prop in obj){
					if (!(prop in this)) {
						slimQuery.prototype[prop] = obj[prop];
					}
				}
				return this;
			};
			this.__isIn = function(item, set){
				for (var i = set.length - 1; i >= 0; i--) {
					if (item.isSameNode(set[i])) {
						return false;
					}
				}
				return true;
			}
			return this;
		}

		// Instance functions
		//
		this.on = function(name, handler){
			this.each(function(item){
				var names = name.split(' ');
				for (var i = names.length - 1; i >= 0; i--) {
					if (names[i] === 'ready') {
						names[i] = 'DOMContentLoaded';
					}
					item.addEventListener(names[i], handler);
				}
			});
			return this;
		};
		this.trigger = function(name){
			var names = name.split(' '),
				event;
			for (var i = names.length - 1; i >= 0; i--) {
				event = document.createEvent('HTMLEvents');
				event.initEvent(names[i], true, false);
				this.each(function(item){
					item.dispatchEvent(event);
				});
			}
			return this;
		};
		this.each = function(handler){
			for(var item in this.data){
				if (parseInt(item)||item === '0') {
					handler(this.data[item]);
				}
			}
		};
		this.get = function(key){
			if (key === undefined) {
				return this.data;
			}
			return this.data[key];
		}
		this.length = function(){
			return this.data.length;
		}		
		if (query) {
			var type = typeof query;
			if (type == 'string') {
				this.data = Array.from(document.querySelectorAll(query));
			}
			else if (type == 'object') {
				if( Array.isArray(query) ){
					this.data = query;
				}
				else{
					this.data = [query];
				}
			}		
		}
	}

	// Returns a new sq Instance
	function sqInstance(query, extend){
		return new slimQuery(query, extend);
	}	

	// Main entry point
	window.sq = function(query){
		// for global slimQuery actions use the global "slimquery" variable');
		return sqInstance(query, false);
	}

	// Extend entry point
	window.slimquery = sqInstance(document, true);

})();