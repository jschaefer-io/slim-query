[![npm version](https://badge.fury.io/js/slim-query.svg)](https://badge.fury.io/js/slim-query)
# slim-query
slim-query is a lightweight jQuery alternative. If offers an extremely limited set of functions around basic DOM traversing and manipulation. Most interactions with slim-query offer the same syntax as jQuery.

## Using slim-query
slim-query offers two ways to interact with its API.

The basic way is similar to the jQuery `$(query)` and gives access to the interactive set of functions. 
```javascript
var res = sq(query);
```
The second way is similar to the jQuery `jQuery` and allows access to static helpers.
```javascript
var api = slimquery;
```