slimquery.extend({
	'find': function(query){
		var list = [],
			set;
		this.each(function(item){
			set = Array.from(item.querySelectorAll(query));
			if (set.length > 0) {
				for (var i = 0; i < set.length; i++) {
					if (!slimquery.__isIn(set[i], list)) {
						list.push(set[i]);
					}
				}
			}
		});
		this.data = list;
		return this;
	},
	'next': function(){
		var list = [];
		this.each(function(item){
			if (item.nextElementSibling !== null) {
				list.push(item.nextElementSibling);
			}
		});
		this.data = list;
		return this;
	},
	'prev': function(){
		var list = [];
		this.each(function(item){
			if (item.previousElementSibling !== null) {
				list.push(item.previousElementSibling);
			}
		});
		this.data = list;
		return this;
	},
	'parent': function(){
		var list = [];
		this.each(function(item){
			if (item.parentNode !== null) {
				list.push(item.parentNode);
			}
		});
		this.data = list;
		return this;
	},
	'parents': function(query){
		var list = [],
			elements = sq(query).get(),
			parent;
		this.each(function(item){
			parent = sq(item).parent();
			while(parent.length > 0){
				if (!slimquery.__isIn(parent.get(0), list)) {
					if (slimquery.__isIn(parent.get(0), elements)) {
						list.push(parent.get(0));
					}
				}
				parent = parent.parent();
			}
		});
		this.data = list;
		return this;
	},
	'children': function(query){
		var list = [],
			childs,
			elements;
		
		if (query !== undefined) {
			elements = sq(query).get();
		}

		this.each(function(item){
			childs = item.children;
			for (var i = childs.length - 1; i >= 0; i--) {
				if (query === undefined) {
					list.push(childs[i]);
				}
				else{
					if (slimquery.__isIn(childs[i], elements)) {
						list.push(childs[i]);		
					}
				}
			}
		});
		this.data = list;
		return this;
	},
	'siblings': function(query){
		var list = [],
			sibs;
		this.each(function(item){
			if (sq(item).parent() !== null) {
				sibs = sq(item).parent().children(query).get();
				for (var i = sibs.length - 1; i >= 0; i--) {
					if (!item.isSameNode(sibs[i]) && !slimquery.__isIn(sibs[i], list)) {
						list.push(sibs[i]);
					}
				}
			}
		});
		this.data = list;
		return this;
	}
});