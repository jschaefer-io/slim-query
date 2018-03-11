# slim-query
slim-query is a lightweight jQuery alternative. If offers an extremely limited set of functions around basic DOM traversing and manipulation. Most interactions with slim-query offer the same syntax as jQuery.

## Examples
Using slim-query mostly mirrors the jQuery API and is therefore very easy to pick up.

```javascript
sq('.nav li').each((item)=>{
	item = sq(item);
	if(item.hasClass('current-nav-item')){
		item.children('.sub-menu').show();
	}
});
```

```javascript
sq('.button').on('click', (event, item)=>{
	event.preventDefault();
	let target = sq(item).attr('data-target');
	if (target !== null) {
		target = sq(target);
		if(target.length() > 0){
			target.toggleClass('reveal');
		}
	}
});
```
## Dokumentation
You can generate your own documentation by using `npm install && npm run doc`. A doc folder will be generated in the package-root directory. The online Documentation can be found here: [Online Dokumentation](https://jschaefer.io/projects/slim-query/doc/)