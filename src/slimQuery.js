
/**
 * slimQuery.js
 * ---------------
 */
(function(){

	function slimQuery(query, extend){
		if (extend) {
			this.extend = function(obj){
				for( var prop in obj){
					if (!(prop in this)) {
						slimQuery.prototype[prop] = obj[prop];
					}
				}
			};
			return this;
		};
		this.on = function(name, handler){
			if (name === 'ready') {
				name = 'DOMContentLoaded';
			};
			this.each(function(item){
				item.addEventListener(name, handler);
			});
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
		
		if (query) {
			var type = typeof query;
			if (type == 'string') {
				this.data = document.querySelectorAll(query);
			}
			if (type == 'object') {
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