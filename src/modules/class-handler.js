slimquery.extend({
	'hasClass': function(classname){
		var classes = classname.split(' '),
			check = true,
			item;
		if (this.get(0) !== undefined) {
			item = this.get(0);
			if (item.className !== undefined) {
				var values = item.className.split(' '),
					innercheck;
				for(var name in classes){
					innercheck = false;
					for(var vals in values){
						if (classes[name] !== values[vals]) {
							if (!innercheck) {
								check = false;
							}
						}
						else{
							innercheck = true;
							check = true;
						}
					}
				}
			}
		}
		return check;
	},
	'addClass': function(classname){
		var classes = classname.split(' ');
		this.each(function(item){
			for(var name in classes){
				if (!sq(item).hasClass(classes[name])) {
					item.className += ' ' + classes[name].trim();
				}
			}
		});
		return this;
	},
	'removeClass': function(classname){
		var classes = classname.split(' '),
			names;
		this.each(function(item){
			if (item.className !== undefined) {
				names = item.className.split(' ');
				for(var vals in names){
					for(var cls in classes){
						if (names[vals] === classes[cls]) {
							names[vals] = '';
						}
					}
				}
				item.className = names.join(' ').trim();
			}			
		});
		return this;
	},
	'toggleClass': function(classname){
		var classes = classname.split(' ');
		this.each(function(item){
			var current = sq(item);
			for(var name in classes){
				if (current.hasClass(classes[name])) {
					current.removeClass(classes[name]);
				}
				else{
					current.addClass(classes[name]);
				}
			}	
		});
		return this;
	}
});