slimquery.extend({
	'attr': function(attr, value){
		if (this.get(0) !== undefined) {
			var atts = this.get(0).attributes;
			for(var att in atts){
				if (atts[att] !== undefined && atts[att].name === attr) {
					if (value != undefined) {
						atts[att].nodeValue = value;
						return this;
					}
					else{
						return atts[att].nodeValue;
					}
				}
			}
		}
		return undefined;
	}
});