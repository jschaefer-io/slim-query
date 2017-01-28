slimquery.extend({
	'attr': function(attr, value){
		var atts,att,i;
		if (value === undefined) {
			for(i in this.get()){
				atts = Array.from(this.get(i).attributes);
				for(att in atts){
					if (atts[att].name === attr) {
						return atts[att].nodeValue;
					}
				}
			}
			return null;
		}
		else{
			this.each(function(item){
				item.setAttribute(attr, value);
			});
			return this;
		}
	},
	'removeAttr': function(attr){
		this.each(function(item){
			item.removeAttribute(attr);
		});
		return this;
	}
});