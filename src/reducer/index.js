var redux =  require("redux");
var mang = require('./mang.js');
var isAdding = require('./isAdding.js');
var users = require('./userReducer.js');

var reducer = redux.combineReducers({
	mang,
	isAdding,
	users
})

module.exports = reducer;