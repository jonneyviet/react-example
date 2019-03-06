
var isAddingReducer = (state = false,action) =>{
	switch (action.type){
		case 'TOGGLE_ISADDING':
			return !state
			break;
		default:
			return state;
	}
}
module.exports = isAddingReducer;