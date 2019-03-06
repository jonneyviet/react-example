var redux =  require("redux");
var reducer = require("reducer");

var store = redux.createStore(reducer,redux.compose(
	window.devToolsExtension?window.devToolsExtension() : f =>f //kiem tra trinh duyet co devTool
));


module.exports = store;
