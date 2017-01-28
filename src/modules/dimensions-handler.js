slimquery.extend({
	'width': function(val){
		if (val === undefined) {
			return this.get(0).clientWidth;
		}
		this.each(function(item){
			item.style.width = val;
		})
		return this;
	},
	'height': function(val){
		if (val === undefined){
			return this.get(0).clientHeight;
		}
		this.each(function(item){
			item.style.height = val;
		})
		return this;
	},
	'outerWidth': function(){
		return this.get(0).offsetWidth;
	},
	'outerHeight': function(){
		return this.get(0).offsetHeight;
	},
});