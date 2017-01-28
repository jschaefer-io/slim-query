slimquery.extend({
	'scrollTop': function(){
		return this.get(0).scrollTop;
	},
	'scrollLeft': function(){
		return this.get(0).scrollLeft;
	},
	'offset': function(){
		var rect = this.get(0).getBoundingClientRect(),
			body = sq('body');
		return {
			'top': rect.top + body.scrollTop(),
			'left': rect.left + body.scrollLeft()
		};
	}
});